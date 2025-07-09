import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from '@react-native-firebase/firestore'
import axios, {} from 'axios'
import { db, auth } from '../firebase/firebaseConfig'
import { format } from 'date-fns'
import { responseClener } from '../../utils/responseCleaner'
import { getWeekKey } from '../../utils/getWeekKey'
import { QueryClient, useQueryClient } from '@tanstack/react-query'



        

export const geminiMoodPrediction = async(targetDateStr, weekKey) => {
    try{


        const q = query(collection(db, 'users', auth?.currentUser?.uid, 'dailyLogs'),orderBy('date','desc'), limit(10) )

        const res = await getDocs(q)

        const dataToPredictFor = res.docs.reverse().map(doc => ({
            ...doc.data(),
            date: format(doc.data().date.toDate(), 'yyyy-MM-dd')
        }))

        const prompt = `
Given the recent health log entries (each representing one day), predict the likely overall condition, body status, heart state, and message the user may experience for the **week of ${targetDateStr}**.

Only choose from these categories:

- body: [ 'noComplaints', 'headache', 'stomachAche', 'backPain', 'ovulationPain', 'tired', 'fatigue', 'swelling', 'sleepiness', 'skin', 'appIncrease', 'cold', 'chest', 'nausea', 'dizziness' ]
- condition: [ 'perfect', 'fair', 'normal', 'notGood' ]
- heart: [ 'happy', 'exicted', 'fine', 'neat', 'calm', 'irritation', 'unstable', 'yutu', 'anxity', 'poor', 'ordinary' ]


❗️Return ONLY a **valid JSON object**, like this (no backticks, no "json", no explanation, no text before or after):

{
  "condition": "normal",
  "body": "stomachAche",
  "heart": "yutu"

}
`.trim();



     

        

        const geminiReturn = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=AIzaSyBq12lR43iJ9lSAhEZxIyyUzo0nOEIfPW4",
            {
                contents: [
                {
                    role:'user',
                    parts: [{text: JSON.stringify(dataToPredictFor)}]
                }
                ],
                systemInstruction:{
                    parts:[{text: prompt }]
                },


            
            },
            {
                headers:{"Content-Type" : 'application/json'}
            }

        )

      const cleandedResponse = responseClener(geminiReturn?.data?.candidates?.[0].content?.parts?.[0]?.text)
  
     await setDoc(doc(db, 'users', auth?.currentUser?.uid, 'predictedMoods', weekKey),{
        ...cleandedResponse
     })


    return {success:true}
  



    } catch(err){
        console.log("Error from gemeni mood prediction", err.message)
        
        return {success:false}
    }
}