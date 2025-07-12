import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
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
   {
    loading ? (
<ActivityIndicator color={'red'} size={'large'}/>
    ): (
 <Text style={{color:'white'}}>Save Peiods</Text>
    )
   }
   </TouchableOpacity>

    </View >
  )
}

export default PeriodsSaveButton