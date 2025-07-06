import { collection, doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useFetchLikeDisLike = (messageId) => {
    const {user} = useAuth()

    return useQuery({
        queryKey:['message', messageId ],
        queryFn:async() => {
            const res = await getDoc(doc(db,'users', user?.uid, 'messages', messageId))
            return res.data()?.response || false
        },
        enabled: !!messageId
    })
}