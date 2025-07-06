import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from '../contexts/AuthContextProvider'

export const useStar = (cardId, typeId) => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['star', cardId],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'users', user?.uid, 'staredCards', cardId))
            return res.exists()
        },
        enabled: !!cardId
    })
}