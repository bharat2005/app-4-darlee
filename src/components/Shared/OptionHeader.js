import { View, Text } from 'react-native'
import React from 'react'

const OptionHeader = ({data}) => {
  return (
    <View style={{height:40, width:'100%', flexDirection:'row'}}>

        <View>
            {data?.icon}
        </View>

        <Text>
            {data?.title}
        </Text>
        
    </View>
  )
}

export default OptionHeader