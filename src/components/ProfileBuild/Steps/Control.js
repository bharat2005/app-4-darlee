import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../../Shared/BigList'


const concious = [
{
  title:'Thres nothiing you can do',
  id: 'cantDo'
},
{
  title:'I dont think thres much i can do',
  id: 'cantDoMuch'
},
{
  title:'I think ther is somthing i can do',
  id: 'somthingDo'
},
{
  title:'I think thers are many things that can be done',
  id: 'manyThingDo'
},
]


const Control = ({width, values, setFieldValue, handleNextPress, setCurrentIndex}) => {

  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>
      
      <View style={{width:'100%', height:'50%'}}>
          <BigList array={concious} value={values?.bodyControl} selectDataOption={(option)=> setFieldValue('bodyControl', option)} handleNextPress={()=> {handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
      </View>


    </View>
  )
}

export default Control