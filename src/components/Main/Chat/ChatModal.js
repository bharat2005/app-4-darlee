import { View, Text, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';


const ChatModal = ({setVisible}) => {
   
  return (
    <View style={{height:200, width:300, backgroundColor:'white', alignSelf:'center', borderRadius:12, marginVertical:'auto'}}>

        <Pressable onPress={()=> setVisible(false)} style={{position:'absolute', top:0, right:0, padding:12}}>
            <AntDesign name="close" size={20} color="black" />
        </Pressable>

        <Text style={{textAlign:'center'}}>idudhfih dffiiwjo</Text>

        <Text style={{lineHeight:30, textAlign:'center', marginTop:12}}>
            lskkmfon ofjwohjf sodjfowe osiddhfowehf wifhwoee wfhhwoh
            djfowj wofiiweihfhe foiwehf weofijwe fwiijf wifj fwpijff 
            sdfjoijf woff woeijfj wfihwoihf wifiw fwohi
        </Text>

    </View>
  )
}

export default ChatModal