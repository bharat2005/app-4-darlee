import { doc, getDoc } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useMyRecords = (selectedDate) => {
    const {user} = useAuth()

    return useQuery({
        queryKey:['myRecord', selectedDate ],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'users', user?.uid, 'dailyLogs', selectedDate))
            return res.data() || false
        },
        enabled: !!selectedDate
    })
}