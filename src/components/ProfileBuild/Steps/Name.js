import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import InputCard from '../../Shared/InputCard'

const Name = ({width, values, handleChange}) => {


  const inputField = <TextInput placeholder='name' mode='outlined' onChangeText={handleChange('name')} value={values?.name}  />
  


  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>


      <InputCard title='Name' value={values?.name} onChangeText={handleChange('name')} />

      
    </View>
  )
}

export default Name