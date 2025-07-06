import { View, Text } from 'react-native'
import React from 'react'
import SmallList from '../../Shared/SmallList'

const symptoms = [
  {
    title:'Headache',
    id:'headache'
  },
    {
    title:'Stomach ache',
    id:'stomachache'
  },
  {
    title:'Swelling',
    id:'swelling'
  },
    {
    title:'Sleepiness',
    id:'sleepiness',
  },
    {
    title:'Rough Skin',
    id:'roughSkin'
  },
    {
    title:'Apetite Increase',
    id:'apetiteIncrease'
  },
    {
    title:'Irritation',
    id:'irritation'
  },
]

const Symptom = ({width, setFieldValue,values}) => {
  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>


      <View style={{height:400}}>
     <SmallList dataArray={values?.pmsSymptoms} array={symptoms} setFieldValue={setFieldValue} />
      </View>

 
      
    </View>
  )
}

export default Symptom