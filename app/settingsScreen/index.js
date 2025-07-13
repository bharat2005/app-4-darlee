import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'


const SettingsScreen = () => {
  const {id} = useLocalSearchParams()
  console.log(id)
  const {data: userData} = useCurrentUser()

  
const data = {
  nickname: {
    headerText:'NickName Change',
    text: 'Change yourn nickname. Enter a new nickname'
  },
  dob: {
    headerText:'Date of Birth Change',
    text: 'Change yourn dob. Enter a new dob'
  },
  email: {
    headerText:'Change Eamil',
    text: `Change your email ${userData?.email}, enter new email`
  },
  password: {
    headerText:`Change password`,
    text:`Change your password, enter new password`,
  },

}
  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{width:'100%', height:55, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{position:'absolute', marginHorizontal:12, left:0}} onPress={()=> router.back()}>
          <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>
        <Text>{data[id]?.headerText}</Text>
      </View>

      <View>
        <Text style={{color:'gray', textAlign:'center'}}>{data[id]?.text}</Text>
      </View>


   
    </SafeAreaView>
  )
}

export default SettingsScreen