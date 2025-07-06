import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { router, useFocusEffect } from 'expo-router'
import { useAgreementStore } from '../../src/stores/useAgreementStore'

let locked = false

const Read = () => {
    const [navigating, setNavigating] = useState(false)

    const readTerms = useAgreementStore((s)=> s.readTerms)
    const readPrivacy = useAgreementStore((s)=> s.readPrivacy)

    useFocusEffect(
        useCallback(()=> {
            locked = false
        })
    )

    const handleNext = () => {
        if(locked) return
        locked = true
        router.push('/(auth)/register')
    }


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:30}}>



      <TouchableOpacity style={{paddingHorizontal:50, paddingVertical:23, backgroundColor:'gray'}} 
      onPress={()=> {
        if(locked) return
        locked = true
        router.push({pathname:'/(auth)/textScreen', params:{textType: 'privacy'}})
      }}>
        <Text style={{color:'white'}}>Privaxy</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{paddingHorizontal:50, paddingVertical:23, backgroundColor:'gray'}} 
      onPress={()=> {
        if(locked) return
        locked = true
        router.push({pathname:'/(auth)/textScreen', params:{textType: 'terms'}})
      }}>

        <Text style={{color:'white'}}>Terms</Text>
      </TouchableOpacity>


  
      <Pressable style={{position:'absolute', bottom:120, backgroundColor:(readPrivacy && readTerms) ? 'black' : 'gray', padding:50}} onPress={(readPrivacy && readTerms) ? handleNext : null}>
        <Text style={{color:'white'}}>Next</Text>
      </Pressable>

    </View>
  )
}

export default Read