import { queryOptions, useInfiniteQuery } from '@tanstack/react-query'
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from '@react-native-firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'



export const useInfinteContent = (typeId) => {
    return useInfiniteQuery({
        queryKey:['content', typeId],
        queryFn:async({pageParam})=> {
            const q = pageParam 
            ?
            query(collection(db, 'contentData' ), where('type', '==', typeId), orderBy('createdAt', 'asc'), startAfter(pageParam), limit(4))
            :
            query(collection(db, 'contentData' ), where('type', '==', typeId), orderBy('createdAt', 'asc'), limit(4))

            const res = await getDocs(q)
            const lastDocRef = res.docs[res.docs.length - 1]
            await getD
            return {
                list : res.docs.map(doc => doc.data()),
                lastDocRef
            }


        },
        getNextPageParam:(lastPageParam)=> lastPageParam?.lastDocRef,
        enabled: !!typeId
    })
}