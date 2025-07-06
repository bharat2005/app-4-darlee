import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { sendGemini } from '../../../services/gemini/sendGemini'

const ChatTextInput = ({setText, text, setLoading, setMessages}) => {


    const handleSend = async () => {
        if( !text.trim() ) return
        const t = text
        setText('')
        setMessages(prev => [{role:'user', text:t}, ...prev])
        setLoading(true)
        const res = await sendGemini(t)
        if (!res.success) {
          setLoading(false)
        }
    }


  return (
    <View style={{flexDirection:'row'}}>
      <TextInput
      value={text}
      onChangeText={(v)=> setText(v)}
      style={{padding:8, height:55, backgroundColor:'lightgray', flex:1, fontSize:18}}

      />
      <View style={{height:'100%', width:'18%', backgroundColor:'white', padding:4, flexDirection:'column-reverse'}}>

        <TouchableOpacity style={{width:'100%', height:50, backgroundColor:'black'}} onPress={handleSend}>


        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ChatTextInput