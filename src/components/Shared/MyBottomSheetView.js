import { View, Text } from 'react-native'
import React from 'react'
import MyBottomSheetViewHeader from './MyBottomSheetViewHeader'
import { useMutateDayLog } from '../../hooks/useMutateDayLog'
import { useDayLog } from '../../hooks/useDayLog'
import FormikView, {} from '../../components/Shared/FormikView'
import { homeSheetStore } from '../../stores/homeSheetStore'

const MyBottomSheetView = () => {
        const closeSheet = homeSheetStore(state => state.closeSheet)
        const homeSheetDate = homeSheetStore(state => state.homeSheetDate)
        const {mutate, error:er, mutateAsync} = useMutateDayLog(homeSheetDate)
        const {data, error} = useDayLog(homeSheetDate)




  return (
    <View style={{flex:1}}>
   
 <MyBottomSheetViewHeader onClosePress={()=>closeSheet()}/>
        
<Text style={{textAlign:'center'}}>{homeSheetDate}</Text>


<FormikView mutate={mutate} mutateAsync={mutateAsync} initialDateBack={data} selectedDate={homeSheetDate}  autoCloseSheet={()=> setTimeout(()=> closeSheet(), 500)}  /> 

    </View>
  )
}

export default MyBottomSheetView