import { View, Text } from 'react-native'
import React from 'react'

const CustomeToast = ({text1, text2, props}) => {
  return (
    <View style={{borderRadius:12, backgroundColor:props?.success ? 'green' : 'red', justifyContent:'center', alignItems:'center'}}>
        <Text>{text1}</Text>
        <Text>{text2}</Text>
    </View>
  )
}

export default CustomeToast