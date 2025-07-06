import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { FlatList } from 'react-native'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from '@react-native-firebase/firestore'
import { db, auth } from '../../src/services/firebase/firebaseConfig'
import { format } from 'date-fns'
import ChatMessageList from '../../src/components/Main/Chat/ChatMessageList'
import ChatTextInput from '../../src/components/Main/Chat/ChatTextInput'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import { messagesPretter } from '../../src/utils/messagesPretter'
import ChatTopBar from '../../src/components/Main/Chat/ChatTopBar'
import { Modal, Portal } from 'react-native-paper'
import ChatModal from '../../src/components/Main/Chat/ChatModal'
import TabScreenTopBar from '../../src/components/Shared/TabScreenTopBar'

const Chat = () => {
  const {user} = useAuth()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)       
  

  useEffect(()=> {
    const q = query(collection(db, 'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, async(snapShot)=> {
      setMessages(messagesPretter(snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))))

      const lastMessage = snapShot.docs[0]
      if(lastMessage?.data().role === 'model'){
        setLoading(false)
      }

      if(snapShot.docs.length === 0){
        try{

                  await addDoc(collection(db, 'users', user?.uid, 'messages'), {
            role: 'model',
            text: 'Hey! How are you feeling today?',
            createdAt:serverTimestamp()
        })


        }catch(err){
            console.log(err.message)
          } 
        

      }
    })

    return ()=> unsub();

  },[])



 




  return (
<KeyboardAvoidingView style={{flex:1}} behavior='height' >

  <SafeAreaView style={{flex:1}} edges={['top']}>
    
    <TabScreenTopBar title='Chats' origin={'chat'} />
    <ChatMessageList messages={messages} loading={loading}/>
    <ChatTextInput text={text} setText={setText} setLoading={setLoading} setMessages={setMessages} />

  </SafeAreaView>

</KeyboardAvoidingView>
  )
}

export default Chat













//    classpath 'com.google.gms:google-services:4.3.15'

//   apply plugin: 'com.google.gms.google-services'























// import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, TextInput } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import {  } from 'react-native-paper'
// import { addDoc, collection, getDoc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp } from '@react-native-firebase/firestore'
// import {auth, db} from '../../src/services/firebase'
// import axios from 'axios'
// import { format, set } from 'date-fns'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { KeyboardAvoidingView } from 'react-native'
// import {} from 'date-fns'


// const Chat = () => {
//   const [text, setText] = useState('')
//   const [messages, setMessages] = useState([])
//   const flatListRef = useRef()



//   useEffect(()=> {
//     if (!auth?.currentUser) return
//     const q = query(collection(db, 'users', auth?.currentUser?.uid, 'messages'), orderBy('createdAt', 'asc'))
//     const unsub = onSnapshot( q, async(snapShot)=> {



//       setMessages(snapShot.docs.reverse().map(doc => doc.data()))

//       if(snapShot.docs.length === 0 ){


//       await addDoc(collection(db, 'users', auth.currentUser?.uid, 'messages'), {
//       role: 'model',
//       text: 'Hi There hows your day going on?',
//       createdAt: serverTimestamp()
//     })



//       }


//     })

//     return () => unsub()

//   },[])




// const handleSend = async() => {
//   if(!(text.trim())  || !(auth.currentUser)) return
//   const t = text
//   setText('')
//   try{
//     await addDoc(collection(db, 'users', auth.currentUser?.uid, 'messages'), {
//       role: 'user',
//       text: t,
//       createdAt: serverTimestamp()
//     })

//     const snapShotDocs = await getDocs(query(collection(db, 'users', auth.currentUser?.uid, 'messages'), orderBy('createdAt', 'desc'), limit(10)))
//      const messages = snapShotDocs.docs.reverse().map(doc => ({
//       role: doc.data().role,
//       parts: [{text: doc.data().text}] 
//     }))




//     const res = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBq12lR43iJ9lSAhEZxIyyUzo0nOEIfPW4', {
//       contents: messages,
//       systemInstruction: {
//         parts: [{text: "You are a friendly, caring assistant named Sofie. You help users track their mood, period, and body symptoms. Be gentle, casual, and supportive — like a caring friend. Never use harsh or clinical tones. Keep responses short, sweet, and emotionally aware."}]
//       }
//     },{
//       headers: {"Content-Type": 'application/json'}
//     })


//       await addDoc(collection(db, 'users', auth.currentUser?.uid, 'messages'), {
//       role: 'model',
//       text: res?.data?.candidates?.[0]?.content?.parts[0]?.text,
//       createdAt: serverTimestamp()
//     })

  

//   } catch(err){
//     console.log(err.message)
//   }
// }


// const renderItem = ({item, index})=> {
//   return (
//     <View style={{minHeight:50, width:'100%', flexDirection:item?.role === 'user' ? 'row-reverse' : 'row', alignItems:'center', paddingHorizontal:12}}>

//         <Text style={{width: item?.role !== 'user' ? '92%' : undefined}}>{item?.text}</Text>
//        {
//         item?.createdAt && (
//    <Text>{format(item?.createdAt.toDate(), 'hh:mm')}</Text>
//         )
//        }
     
        

//     </View>
//   )
// }

//   return (

//     <KeyboardAvoidingView style={{flex:1}} behavior='padding'> 

//             <SafeAreaView style={{flex:1}} edges={['top']}>


//         <View style={{flex:1}}>

//           <FlatList
//           inverted
//           ref={flatListRef}
//           data={messages}
//           keyExtractor={(item, index)=> index.toString()}
//           renderItem={renderItem}
//           />

//         </View>


// <View style={{marginTop:'auto', flexDirection:'row',}}>
// <TextInput  multiline  onChangeText={(v)=> setText(v)} 
//   value={text}  style={{flex:1, maxHeight:140,fontSize:18,  textAlignVertical:'center',height:'100%',  backgroundColor:'lightgray', paddingHorizontal:12}}/>
// <TouchableOpacity onPress={handleSend} style={{width:90,height:'100%', backgroundColor:'black'}} />
// </View>


// </SafeAreaView>

//     </KeyboardAvoidingView>






//   )
// }

// export default Chat