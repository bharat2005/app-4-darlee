import { View, Text } from 'react-native'
import React from 'react'

const CardListTitle = ({listData}) => {
  return (
    <View style={{height:20, width:'100%', paddingHorizontal:12}}>
      <Text>{listData?.title}</Text>
    </View>
  )
}

export default CardListTitle