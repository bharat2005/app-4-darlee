import { doc, query, updateDoc } from "@react-native-firebase/firestore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useLikeDisLike = (messageId) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({userResponse, currentResponse})=> {
            const docRef  = doc(db , 'users', user?.uid, 'messages', messageId)
            await updateDoc(docRef, {
                        response:  (userResponse === currentResponse) ? null : userResponse
                    })
        },
        onSuccess:() => {
            queryClient.invalidateQueries(['message', messageId])
        },
        onMutate:async({userResponse, currentResponse}) => {
            await queryClient.cancelQueries(['message', messageId])

            const prevCatched = queryClient.getQueryData(['message', messageId])

            queryClient.setQueryData(['message', messageId], prev => (currentResponse === userResponse) ? null : userResponse)

            return {
                prevCatched
            }
        },
        onError:(a, b, context) => {
            queryClient.setQueryData(['message', messageId], context.prevCatched)
        }
    })
}