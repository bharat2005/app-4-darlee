import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const LOVE = () => {
  const {logout} = useAuth()
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      
      <Button onPress={logout}>
        Logout
      </Button>
      
    </View>
  )
}

export default LOVE