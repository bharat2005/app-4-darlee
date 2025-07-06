import { collection, doc, getDoc, getDocs, query, where } from "@react-native-firebase/firestore"
import { useQuery } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useFavCards = (typeId) => {  
    const {user} = useAuth()

    return useQuery({
        queryKey:['favCards', typeId],
        queryFn:async()=>{
            const q = query(collection(db, 'users', user?.uid, 'staredCards'),where('typeId', '==', typeId))
            const res = await getDocs(q)
            const favCardsIds = res.docs.map(doc => doc.id)

           const cards = await Promise.all(favCardsIds.map(async(id)=> {
                const res = await getDoc(doc(db,'cards', id))
                return {...res.data(), docId:res.id}
            }))


            return cards
        }
    })
}