import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'

const FormikViewButton = ({handleSubmit, isSubmitting}) => {
  return (
    <View style={{height:80, width:'100%', padding:16}}>

      <Button onPress={handleSubmit} loading={isSubmitting} disabled={isSubmitting} style={{ width:'100%', backgroundColor:isSubmitting ? 'lightgray' : 'black'}} contentStyle={{height:50}} theme={{roundness:2}}>
         <Text style={{color:'white'}}>Save</Text>
      </Button>

    </View>
  )
}

export default FormikViewButton