import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OptionHeader from './OptionHeader'
import { MaterialIcons } from '@expo/vector-icons'

const NormalBool = ({data, onButtonPress, value}) => {
  return (
    <View style={{width:'100%'}}>
        <OptionHeader data={data} />

          <View style={{flexDirection:'row', width:'100%',height:50, justifyContent:'space-between', alignItems:'center'}}>

            <TouchableOpacity onPress={() => onButtonPress(!value)} style={{height:'100%', width:'50%', flexDirection:'row', alignItems:'center'}} >

                <View style={{height:50, width:50, borderRadius:8, justifyContent:'center', alignItems:'center', backgroundColor: value ? 'blue' : 'lightgray'}}>
                        <MaterialIcons name="done" size={24} color={value?.isDuringMensuration ? 'black' : 'gray'} />
                </View>

                <Text>Abnormal Bleeding</Text>

            </TouchableOpacity>

        </View>
    </View>
  )
}

export default NormalBool