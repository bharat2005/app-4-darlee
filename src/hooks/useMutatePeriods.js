import { useMutation } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'
import { doc, serverTimestamp, setDoc } from '@react-native-firebase/firestore'
import { useAuth } from '../contexts/AuthContextProvider'

export const useMutatePeriods = () => {
    const {user} = useAuth()

    return useMutation({
        mutationFn: async({periods})=> {

            await Promise.all(periods.map(async(item, index)=> {
                const docRef = doc(db, 'users', user?.uid, 'cycles', `${item?.start}-${item?.end}`)
                 return setDoc(docRef, {
                    ...item,
                    source: 'user',
                    phase: 'period',
                    createdAt:serverTimestamp(),
                    updatedAt: serverTimestamp()
                })

            }))
        },


    })
}