import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp } from "@react-native-firebase/firestore"
import { useAuth } from '../../contexts/AuthContextProvider'
import { db , auth} from "../firebase/firebaseConfig"
import axios from "axios"


export const sendGemini = async (message) => {
 

    try {
           
        await addDoc(collection(db, 'users', auth?.currentUser?.uid, 'messages'), {
            role: 'user',
            text: message,
            createdAt: serverTimestamp(),
        })
        const q = query(collection(db, 'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'), limit(10))
        const lastMessagesDocs = await getDocs(q)
        const lastMessages = lastMessagesDocs.docs.reverse().map(doc => {
            let additionData = ''
            if (doc?.data()?.response === 'like') additionData = 'User liked this response: '
            if (doc?.data()?.response === 'dislike') additionData = 'User disliked this response: '
            return {
            role: doc.data().role,
            parts: [{text : `${additionData}${doc.data().text}`}]
            }
       
        })


        const res = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=AIzaSyBq12lR43iJ9lSAhEZxIyyUzo0nOEIfPW4',
            {
                contents: lastMessages,
                systemInstruction:{
                    parts: [{text: 
                        `You are a friendly assistant named Sofie. When past messages include notes like "(User liked this message)" or "(User disliked this message)", use that to improve your tone and response style.
                        Be gentle, supportive, and emotionally aware. Avoid repeating styles that were disliked. Respond in a short, warm, casual way.
                    `.trim()
                    }]
                }
            },
            {
                headers: {"Content-Type": 'application/json'}
            }
        )

        const reply = res?.data?.candidates?.[0].content?.parts?.[0]?.text

       await addDoc(collection(db, 'users', auth?.currentUser?.uid, 'messages'),{
        role:'model',
        text:reply,
        createdAt:serverTimestamp(),
       })

         return{success:true}
    } catch(err){
        console.log("Error form  sendGemini funtion", err.message)
        return{success:false}
    }
}