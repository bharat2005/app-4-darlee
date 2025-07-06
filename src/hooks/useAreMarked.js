import { collection, doc, getDoc, getDocs, query } from '@react-native-firebase/firestore'
import { useQuery } from '@tanstack/react-query'
import { db } from '../services/firebase/firebaseConfig'
import { useAuth } from '../contexts/AuthContextProvider'


export const useAreMarked = () => {
    const {user} = useAuth()

    return useQuery({
        queryKey:['areMarked'],
        queryFn:async() => {
            const res =  await getDocs(collection(db, 'users', user?.uid, 'dailyLogs'))
            let markedDates = {}

            res.docs.forEach(doc => {
                markedDates[doc.id] = true
            })

            return markedDates

        
        },
   
    })
}