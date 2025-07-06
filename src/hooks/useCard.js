import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from '@react-native-firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

export const useCard = (cardId) => {
    return useQuery({
        queryKey:[cardId],
        queryFn:async()=> {
            const res = await getDoc(doc(db, 'cards', cardId))
            return {...res.data(), docId:res.id}
        },
        enabled: !!cardId
    })
}