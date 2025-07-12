import { useQueries, useQuery } from "@tanstack/react-query"
import { useAuth } from "../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs } from "@react-native-firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

export const usePeriods = () => {
    const {user} = useAuth()

    return useQuery({
        queryKey:['periodsCalender', user?.uid],
        queryFn:async() =>{
            const res = await getDocs(collection(db, 'users', user?.uid, 'cycles'))
            return res.docs.map(doc => doc.data()) || []
        }
    })
}