import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'



const BigList = ({array, value, selectDataOption, handleNextPress}) => {
  const locked = useRef(false)

  const handleOnPress = (id) => {
    if(locked.current) return 
    locked.current = true
    selectDataOption(id)
      setTimeout(()=> handleNextPress(),600)
      locked.current = false

  }


  return (
    <View style={{flex:1}}>

    {array.map((item, index)=> (
        <TouchableOpacity key={index} onPress={()=>handleOnPress(item?.id)} style={{flex:1, width:'100%', padding:8}}>

            <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:value === item?.id ? 'pink' : 'white', flexDirection:'row', justifyContent:"space-between",padding:12}}>
                <Text>{item?.title}</Text>

            </View>
        </TouchableOpacity>
    ))}
     
    </View>
  )
}

export default BigList