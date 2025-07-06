import { collection, getDocs, limit, orderBy, query, startAfter, where } from "@react-native-firebase/firestore"
import { useInfiniteQuery } from "@tanstack/react-query"
import {db} from '../services/firebase/firebaseConfig'

export const useInfinteCards = (id) => {
    return useInfiniteQuery({
        queryKey:['cards', id],
        queryFn: async({pageParam})=> {
            const q = pageParam
            ? 
            query(collection(db,'cards'), where('id', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(3))
            : 
            query(collection(db,'cards'), where('id', '==', id), orderBy('createdAt', 'desc'), limit(3))

            const res = await getDocs(q)
            const lastDocRef = res.docs[res.docs.length - 1]

            return {
                list : res.docs.map(doc => ({docId: doc.id, ...doc.data()})),
                lastDocRef
            }
        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastDocRef,
        enabled: !!id
    })
}