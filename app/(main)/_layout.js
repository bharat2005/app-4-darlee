import { View, Text, TextBase } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const MainLayout = () => {
  return (
<Tabs screenOptions={{headerShown:false}}>
<Tabs.Screen name='home' />
<Tabs.Screen name='chat' />
<Tabs.Screen name='love' />
<Tabs.Screen name='contentFav' />
<Tabs.Screen name='calender' />
</Tabs>
  )
}

export default MainLayout