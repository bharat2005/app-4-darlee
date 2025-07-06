import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import RegisterBox from '../../src/components/Auth/RegisterBox'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Register = () => {
  const {googleLogin} = useAuth()
  return (
    <View style={{flex:1, paddingTop:40}}>
      <RegisterBox />

      <TouchableOpacity onPress={googleLogin} style={{backgroundColor:'gray', padding:40}}>
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register