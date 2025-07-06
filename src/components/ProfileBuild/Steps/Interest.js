import { View, Text } from 'react-native'
import React from 'react'
import BigList from '../../Shared/BigList'

const interests = [
{
  title:'Not Very Interested',
  id: 'notVeryInterested'
},
{
  title:'Little Interested',
  id: 'littleInterested'
},
{
  title:'I am Interested',
  id: 'imInterested'
},
{
  title:'Im very Interested',
  id: 'veryInterested'
},
]

const Interest =({width, values, setFieldValue, handleNextPress, setCurrentIndex}) => {
  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>

      <View style={{width:'100%', height:'50%'}}>
<BigList array={interests} value={values?.healthInterest} selectDataOption={(option)=> setFieldValue('healthInterest', option)} handleNextPress={()=> {handleNextPress(); setCurrentIndex(prev => prev + 1)}} />
      </View>


      
    </View>
  )
}

export default Interest