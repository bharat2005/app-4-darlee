import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from '@react-native-firebase/firestore'
import {db} from '../services/firebase/firebaseConfig'


export const useText = (type) => {
    return useQuery({
        queryKey:[type],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'textData', type))
            return res.data()
        },
        enabled:!!type
    })
}