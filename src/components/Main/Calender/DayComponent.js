import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useIsMarked } from '../../../hooks/useAreMarked'
import { TextInput } from 'react-native-paper'

const DayComponent = ({state, date, onPress, isMarked, phaseColor}) => {



  const handlePress = () => {
    if(new Date() > new Date(date?.timestamp)){
      onPress(date?.dateString)
    }
  }


  return (
    <Pressable onPress={handlePress} style={{height:50, width:'100%', justifyContent:'center' , alignItems:'center', backgroundColor: state === 'today' ? 'cyan' : 'white', borderBottomColor:phaseColor, borderBottomWidth:5}}>
        <Text>{date.day}</Text>

        {isMarked && (

        <TextInput.Icon icon={'check-circle'}  style={{position:'absolute', bottom:0, left:0}}/>
        )}

        
    </Pressable>
  )
}

export default DayComponent