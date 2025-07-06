import { deleteDoc, doc, query, serverTimestamp, setDoc } from "@react-native-firebase/firestore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useMuteStar = (cardId, typeId) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({isStared, cardData})=>{
            const docRef = doc(db, 'users', user?.uid, 'staredCards', cardId)
            if (isStared){
                await deleteDoc(docRef)
            } else {
                await setDoc(docRef, {
                    createdAt: serverTimestamp(),
                    docId: docRef.id,
                    typeId
                })
            }
            
        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['star', cardId])
             queryClient.invalidateQueries(['favCards', typeId])
        },
        onMutate:async({isStared, cardData})=> {
            await queryClient.cancelQueries(['star', cardId])
            await queryClient.cancelQueries(['favCards', typeId])

            const prevCatched = queryClient.getQueryData(['star', cardId])
             const prevCatched2 = queryClient.getQueryData(['favCards', typeId])


            queryClient.setQueryData(['star', cardId], prev => {
                if(isStared){
                    return false
                } else {
                    return true
                }
            })
            queryClient.setQueryData(['favCards', typeId], prev => {
                if(isStared){
                    return prev.filter(item => item?.docId !== cardId)
                } else {
                    return [{...cardData}, ...prev]
                }
        })

            return {
                prevCatched,
                prevCatched2
            }
        },
        onError:(a, b, context)=> {
            queryClient.setQueryData(['star', cardId], context.prevCatched)
            queryClient.setQueryData(['favCards', typeId], context.prevCatched)
        }
    })
}