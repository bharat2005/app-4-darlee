import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
<Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='start' />
        <Stack.Screen name='read' />
    <Stack.Screen name='register' />
    <Stack.Screen name='login' />
        <Stack.Screen name='textScreen' />
  
</Stack>
  )
}

export default AuthLayout