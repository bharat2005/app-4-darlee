import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const ProfileDetailHeader = () => {
  return (
    <View style={{width:Dimensions.get('screen').width, height:55, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

      <TouchableOpacity onPress={()=> router.back()} style={{position:'absolute', left:0, marginHorizontal:12}}>
        <AntDesign name="arrowleft" size={24} color="gray" />
      </TouchableOpacity>

        <Text>Accounts Settings</Text>

      
    </View>
  )
}

export default ProfileDetailHeader