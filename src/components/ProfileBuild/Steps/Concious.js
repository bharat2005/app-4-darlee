import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../../Shared/BigList'

const concious = [
{
  title:'I dont have anything in perrticualr',
  id: 'notPerticualr'
},
{
  title:'I act a little consious',
  id: 'littleConcious'
},
{
  title:'Acting conciously',
  id: 'actingConciously'
},
{
  title:'Act Very conciously',
  id: 'actVeryConciously'
},
]


const Concious = ({width, values, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>

            <View style={{width:'100%', height:'50%'}}>
<BigList array={concious} value={values?.healthConcious} selectDataOption={(option)=> setFieldValue('healthConcious', option)} handleNextPress={()=> {handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
      </View>


      
      
    </View>
  )
}

export default Concious