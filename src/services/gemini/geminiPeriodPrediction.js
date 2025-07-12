import { collection, doc, getDoc, getDocs, limit, orderBy, query, serverTimestamp, setDoc, where } from "@react-native-firebase/firestore"
import { auth, db } from "../firebase/firebaseConfig"
import axios from "axios"
import { responseClener } from '../../utils/responseCleaner'
import { format } from "date-fns"

export const geminiPeriodPrediction = async() => {
    try{
        const today = format(new Date(), 'yyyy-MM-dd')

        const q = query(collection(db, 'users', auth?.currentUser?.uid, 'cycles'), where('source' ,'==', 'user'), orderBy('createdAt', 'desc'), limit(3))
        const res = await getDocs(q)
        const dataToSend = res.docs.map(doc => ({start: doc.data()?.start, end: doc?.data()?.end, phase: 'period' }) )
        const prompt = `
You are a menstrual cycle assistant. 
Based on the last 3 user-recorded menstrual periods I’ll provide below (with 'start' and 'end' dates), 
predict the next **two full menstrual cycles** relative to todays date ${today}, including the following phases:

- period
- follicular
- ovulation
- luteal

Return the result as a **JSON array of objects**. Each object must include:
- start (in yyyy-MM-dd)
- end (in yyyy-MM-dd)
- phase (one of: "period", "follicular", "ovulation", "luteal")

Make sure there are **no gaps between phases** and the sequence is medically plausible.
Avoid extra text – return only a JSON array. Example:

[
  { "start": "2025-07-10", "end": "2025-07-14", "phase": "period", "source": "predictor" },
  { "start": "2025-07-15", "end": "2025-07-19", "phase": "follicular", "source": "predictor" },
  ...
]
`.trim()

        const geminiReturn = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=AIzaSyBq12lR43iJ9lSAhEZxIyyUzo0nOEIfPW4',
            {
                contents: [
                {
                    role: 'user',
                    parts: [{text: JSON.stringify(dataToSend)}]
                }
            ],
            systemInstruction: {
                parts:[{text: prompt}]
            }
            

        
        },
            {
                headers: {"Content-Type": 'application/json'}
            }
        )

        const returnedData = geminiReturn?.data?.candidates?.[0]?.content?.parts[0]?.text
        const cleanedResponse = responseClener(returnedData, 'array')

        

        await Promise.all(cleanedResponse.map(async(item , index)=> {
            const docRef = doc(db, 'users', auth?.currentUser?.uid, 'cycles', `${item?.start}-${item?.end}` )
            return setDoc(docRef, {
                ...item,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                source: 'predictated'
            })
        }))

        

    } catch(err){
        console.log("Eroor from 'gemini",err.message)
    }
}