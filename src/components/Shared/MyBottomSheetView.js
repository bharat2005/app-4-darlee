import { View, Text } from 'react-native'
import React from 'react'
import MyBottomSheetViewHeader from './MyBottomSheetViewHeader'
import { useMutateDayLog } from '../../hooks/useMutateDayLog'
import { useDayLog } from '../../hooks/useDayLog'
import FormikView, {} from '../../components/Shared/FormikView'

const MyBottomSheetView = ({sheetRef, selectedDate}) => {
        const {mutate, error:er, mutateAsync} = useMutateDayLog(selectedDate)
        const {data, error} = useDayLog(selectedDate)




  return (
    <View style={{flex:1}}>
   
 <MyBottomSheetViewHeader onClosePress={()=> sheetRef.current.dismiss()}/>
        
<Text style={{textAlign:'center'}}>{selectedDate}</Text>


<FormikView mutate={mutate} mutateAsync={mutateAsync} initialDateBack={data} selectedDate={selectedDate} sheetRef={sheetRef}  /> 




    </View>
  )
}

export default MyBottomSheetView