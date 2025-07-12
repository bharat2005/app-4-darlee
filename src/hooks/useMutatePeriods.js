import { useMutation } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'
import { collection, doc, getDocs, serverTimestamp, setDoc, writeBatch } from '@react-native-firebase/firestore'
import { useAuth } from '../contexts/AuthContextProvider'

export const useMutatePeriods = () => {
    const {user} = useAuth()

    return useMutation({
        mutationFn: async({periods})=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'cycles'))
            const batch = writeBatch(db)

            res.docs.forEach(doc => {
                batch.delete(doc.ref)
            })

            await batch.commit()

            const filtered = periods.filter(item => item?.source === 'user')

            await Promise.all(filtered.map(async(item, index)=> {
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