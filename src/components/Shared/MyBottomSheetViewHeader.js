import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const MyBottomSheetViewHeader = ({onClosePress}) => {
  return (
    <View style={{height:40, width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Text>Record</Text>


      <TouchableOpacity onPress={onClosePress} style={{position:'absolute', right:0, padding:8}}>
        <AntDesign name="close" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

export default MyBottomSheetViewHeader