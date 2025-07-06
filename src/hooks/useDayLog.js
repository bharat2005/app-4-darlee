import { useQuery, useQueryErrorResetBoundary } from '@tanstack/react-query'
import { doc, getDoc } from '@react-native-firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import { useAuth } from '../contexts/AuthContextProvider'

export const useDayLog = (day) => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['dayLog',day ],
        queryFn:async() => {
            const res = await getDoc(doc(db, 'users', user?.uid, 'dailyLogs', day ))
            return res.data() || false
        }
    })
}