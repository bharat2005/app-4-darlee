import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
import { useMutatePeriods } from '../../hooks/useMutatePeriods'
import { router } from 'expo-router'
import { geminiPeriodPrediction } from '../../services/gemini/geminiPeriodPrediction'

const PeriodsSaveButton = ({periods}) => {
  const {mutate, error}  = useMutatePeriods(periods)
   const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    mutate({periods},{
      onSuccess:async()=> {
        await geminiPeriodPrediction()
        router.back()
      }
    })
  }

  console.log(error)
    
  return (
    <View style={{width:'100%', height: 48, padding:2}} >
   
   <TouchableOpacity disabled={loading} onPress={handleSave} style={{height:'100%', width:'100%', backgroundColor:'black', justifyContent:'center', alignItems:'center' }}>

 <Text style={{color:'white'}}>Save Peiods</Text>
  
   </TouchableOpacity>


   <Modal visible={loading} transparent animationType='fade'>
    <View style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').height, alignSelf:'center', backgroundColor:'rgba(0,0,0,0.4)', marginVertical:'auto', justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color={'white'} size='large' />
    </View>
   </Modal>

    </View >
  )
}

export default PeriodsSaveButton