import { doc, setDoc, updateDoc } from "@react-native-firebase/firestore"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { auth, db } from "../services/firebase/firebaseConfig"
import { useAuth } from "../contexts/AuthContextProvider"
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword } from "@react-native-firebase/auth"

export const useDetailChange = () =>{
    const {user}  = useAuth()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({id, value, email, password})=>{
            await updateDoc(doc(db, 'users', user?.uid), {
                [id]: value
            })
        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['user', user?.uid ])
            console.log('Success', auth?.currentUser?.email)
        }
    })
}