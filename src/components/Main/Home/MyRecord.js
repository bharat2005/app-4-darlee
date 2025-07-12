import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MyRecordView from './MyRecordView'
import MyPredictionView from './MyPredictionView'

const MyRecord = ({selectedDate,isFuture}) => {



  return (
    <View style={{width:'100%', backgroundColor:'snow', marginVertical:24, flex:1}}>

      {isFuture ? (
<MyPredictionView selectedDate={selectedDate} />
      ) : (


        <MyRecordView selectedDate={selectedDate}   />
      )}




     
    </View>
  )
}

export default MyRecord