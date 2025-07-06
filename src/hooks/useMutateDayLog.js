import { doc, setDoc } from "@react-native-firebase/firestore"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import { db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"

export const useMutateDayLog = (day) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({data})=>{
            await setDoc(doc(db, 'users', user?.uid, 'dailyLogs', day ),{
            ...data
            }, {merge:true})
        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['dayLog',day ])
        },
        onMutate:async({data}) => {
            await queryClient.cancelQueries(['dayLog',day ])

            const prevCatched = queryClient.getQueryData(['dayLog',day ])

            queryClient.setQueryData(['dayLog',day ], prev => ({
                ...data
            }))

            return {
                prevCatched
            }
        },
        onError:(a,b,contexts)=> {
            queryClient.setQueryData(['dayLog',day ], contexts.prevCatched)
            
        }
    })
}