import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileDetailHeader from '../../src/components/ProfileDetail/ProfileDetailHeader'
import { router } from 'expo-router'

const accountSettingsData = [
  {
    label:'NickName',
    id: 'nickname'
  },
  {
    label:'Date of Birth',
    id: 'dob'
  },
  {
    label:'Email Address',
    id: 'email'
  },
  {
    label:'Password',
    id: 'password'
  },
]

const ProfileDetails = () => {
  const renderItem = ({item})=>(
    <TouchableOpacity onPress={()=> router.push({pathname:'/settingsScreen', params: {id: item?.id}})} style={{width:'100%', height:40, flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
        <Text>
          {item?.label}
        </Text>
    </TouchableOpacity>
  )


  return (
    <SafeAreaView style={{flex:1}}>

      <ProfileDetailHeader />

<View style={{padding:12}}>
  

      <FlatList
      scrollEnabled={false}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={renderItem}
      data={accountSettingsData}
      />

</View>

    </SafeAreaView>
  )
}

export default ProfileDetails