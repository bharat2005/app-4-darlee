import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { router, useFocusEffect } from 'expo-router'



const Start = () => {
  const [navigating, setNavigating] = useState(false)


useFocusEffect(
  useCallback(() => {
    setNavigating(false)
  },[])
)

const handleStartPress = () => {
  if(navigating) return
  setNavigating(true)
  router.push('/(auth)/read')

}


const handleLoginPress = () => {
  if(navigating) return
  setNavigating(true)
  router.push('/(auth)/login')
}






  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

      <TouchableOpacity style={{paddingHorizontal:60, paddingVertical:23, backgroundColor:'black'}} onPress={handleStartPress}>
        <Text style={{color:'white'}}>Start</Text>
      </TouchableOpacity>

      <Pressable onPress={handleLoginPress} style={{marginVertical:30}} >
        <Text style={{color:'black'}}>Already have an account?</Text>
      </Pressable>

      


    </View>
  )
}

export default Start