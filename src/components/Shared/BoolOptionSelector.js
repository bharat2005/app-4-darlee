import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import OptionHeader from './OptionHeader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SubOptions from './SubOptions';
import { router } from 'expo-router';

const BoolOptionSelector = ({value, onButtonPress, onOptionPress , data, discharge, bool}) => {


const renderTitleOptions = ({item, index}) => (
  <Pressable onPress={()=> onButtonPress(item)} key={index} style={{flex:1, height:'100%', backgroundColor: value?.amount === item ? 'blue' : 'lightgray', justifyContent:'center', alignItems:'center'}}>

    <Text>{item}</Text>

  </Pressable>
)


  return (
    <View style={{width:'100%'}}>
        <OptionHeader data={data} />

{
  discharge ? (
    <View style={{flexDirection:'row', height:50, width:'100%' }}>
      {
        data?.bigOptions.map((item, index) => (
          <>
          {renderTitleOptions({item, index})}
          </>
        ))
      }
      </View>

  ) : (
     <View style={{flexDirection:'row', width:'100%',height:50, justifyContent:'space-between', alignItems:'center'}}>

            <TouchableOpacity onPress={() => onButtonPress(!value?.isDuringMensuration)} style={{height:'100%', width:'50%', flexDirection:'row', alignItems:'center'}} >

                <View style={{height:50, width:50, borderRadius:8, justifyContent:'center', alignItems:'center', backgroundColor: value?.isDuringMensuration ? 'blue' : 'lightgray'}}>
                        <MaterialIcons name="done" size={24} color={value?.isDuringMensuration ? 'black' : 'gray'} />
                </View>

                <Text>During Mensurration</Text>

            </TouchableOpacity>


               <TouchableOpacity onPress={router.push('/periodCalenderScreen')} style={{height:50, width:'100%', position:'absolute', backgroundColor:'black', right:18}}>
                          <Text>Period</Text>
              </TouchableOpacity>

        </View>
  )
}
   

        <SubOptions value={value} onOptionPress={onOptionPress} bool={bool} options={data?.options} subTitle={data?.subTitle} />


    </View>
  )
}

export default BoolOptionSelector