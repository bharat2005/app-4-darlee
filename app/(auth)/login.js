import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginBox from '../../src/components/Auth/LoginBox'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Login = () => {
    const {googleLogin} = useAuth()
  return (
    <View style={{flex:1, paddingTop:40}}>
      <LoginBox />
           <TouchableOpacity onPress={googleLogin} style={{backgroundColor:'gray', padding:40}}>
              <Text>Login with Google</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Login