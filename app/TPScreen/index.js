import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useText } from '../../src/hooks/useText'
import { useLocalSearchParams } from 'expo-router'

const TPScreen = () => {
    const {id} = useLocalSearchParams()
    const {data} = useText(id)
  return (
    <SafeAreaView style={{flex:1}}>
        <Text>{data?.text}</Text>
    </SafeAreaView>
  )
}

export default TPScreen