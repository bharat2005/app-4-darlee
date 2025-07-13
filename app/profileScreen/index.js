import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileScreenHeader from '../../src/components/ProfileScreen/ProfileScreenHeader'
import MySectionList from '../../src/components/ProfileScreen/MySectionList'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'

const ProfileScreen = () => {
    const {data} = useCurrentUser()



  return (
    <SafeAreaView style={{flex:1}}>
      <ProfileScreenHeader  data={data}/>

      <MySectionList userId={data?.uid} />



      
        
    </SafeAreaView  >
  )
}

export default ProfileScreen