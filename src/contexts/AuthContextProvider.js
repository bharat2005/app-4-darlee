import { View, Text, Alert } from 'react-native'
import React, { createContext, use, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithCredential, signInWithEmailAndPassword, signOut } from '@react-native-firebase/auth'
import {db, auth} from '../services/firebase/firebaseConfig'
import { router, useNavigation } from 'expo-router'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import {  deleteDoc, doc, getDoc, serverTimestamp, setDoc, Timestamp, updateDoc } from '@react-native-firebase/firestore'
import { CommonActions } from '@react-navigation/native'


const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)


    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, async(u)=> {
            setUser(u)

            if(u){
                const  res = await getDoc(doc(db, 'users', u?.uid))
            if(res?.data()?.hasCompletedOnboarding === true){
                router.replace('/(main)/home')
            } else {
                 router.replace('/profileBuild')
            }
            } else {
                router.replace('/(auth)/start')
            }
     
            
        })

        return unsub;
    },[])



    useEffect(()=> {
        GoogleSignin.configure({
            webClientId: '375008337668-gseub831gje492bvmpa92apmm4flfkqc.apps.googleusercontent.com'
        })
        
    },[])


    const googleLogin = async() => {
        try{
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true})
        const {data} = await GoogleSignin.signIn()

        const cred = GoogleAuthProvider.credential(data?.idToken)

        const res = await signInWithCredential(auth, cred)

        const docRef = doc(db, 'users', res?.user?.uid)
        const docSnapShot = await getDoc(docRef)

        if(!docSnapShot.exists()){
            setDoc(docRef, {
                uid:res?.user?.uid,
                hasCompletedOnboarding: false,
                profilePicUri: res?.user?.photoURL,
                email: res?.user?.email,
                createdAt: serverTimestamp()
            })
        }


        } catch(err){
            console.log("Error form googleLogin funtion", err.message)
            Alert.alert("Error", err.message)
        }
    }

    const logout = async() =>{
        try{
            await signOut(auth)
            
        } catch(err){
            console.log("Error form logout funtion", err.message)
            Alert.alert('Error', err.message)
        }
    }

    const registerWithEmail = async(email, password, username) => {
        try{
        const res = await createUserWithEmailAndPassword(auth, email, password)


        const docRef = doc(db, 'users', res?.user?.uid)


            setDoc(docRef, {
                uid:res?.user?.uid,
                hasCompletedOnboarding: false,
                profilePicUri: '',
                email: res?.user?.email,
                createdAt: serverTimestamp()
            })


        } catch(err){
            console.log("Error frrom eamil", err.message)
            Alert.alert("Error", err.message)
        }
    }

    const loginWithEmail = async(email, password) => {
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)

        }catch(err){
            console.log("Erorr forom loginWithEamil", err.message)
            Alert.alert("ERror", err.message)
        }
    }

    const userProfileBuild = async (values) => {
        try{
            const docRef = doc(db, 'users', user?.uid)
           await updateDoc(docRef, {
                ...values,
                dob:Timestamp.fromDate(values?.dob),
                recentPeriodDate:Timestamp.fromDate(values?.recentPeriodDate),
                hasCompletedOnboarding:true
            })


            router.replace('/(main)/home')

        } catch(err){
            console.log("Eror from usrrProfileBuild funtion", err.message)
        }
    }

    const forgetPassword = async(email) => {
        try{
            await sendPasswordResetEmail(auth,email)
            return {success:true}
        } catch(err){
            console.log("Error from forget passwor fruntion", err.message)
            Alert.alert("Error", err.message)
            return{success:false}
        }
    }


    const deleteAccount = async() => {
        try{

            await deleteDoc(doc(db, 'users', user?.uid))
            await deleteUser(auth.currentUser)

        }catch(err){
            console.log("ERrror frm deleteAccount", err.message)
        }
    }




  return (
<AuthContext.Provider value={{googleLogin, user, logout, registerWithEmail, loginWithEmail, userProfileBuild, forgetPassword, deleteAccount}}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)