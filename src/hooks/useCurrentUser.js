import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from '@react-native-firebase/firestore'
import {db} from '../services/firebase/firebaseConfig'
import { useAuth } from '../contexts/AuthContextProvider'


export const useCurrentUser = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['user', user?.uid ],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'users', user?.uid))
            return res.data()
        },
        enabled:!!user?.uid
    })
}