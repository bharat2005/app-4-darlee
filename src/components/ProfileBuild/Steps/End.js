import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'

const End = ({width, handleSubmit, isSubmitting}) => {
  return (
    <View style={{width, flex:1, backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}}>

   <Button loading={isSubmitting} onPress={handleSubmit} mode='contained' >
    Care Me
   </Button>
      
    </View>
  )
}

export default End