import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { useMyRecords } from '../../../hooks/useMyRecords'
import AntDesign from '@expo/vector-icons/AntDesign';
import { homeSheetStore } from '../../../stores/homeSheetStore';

const MyFlower = ({dateString,isFuture}) => {
  if(isFuture) return
  
  const {data, isLoading} = useMyRecords(dateString)
  const openSheet = homeSheetStore((state)=> state.openSheet)

  const condition = useMemo(()=> {
    if(!data) return

    return data?.condition

  }, [data])



  if (!data || isLoading) {

    return(
       <View style={{width:(Dimensions.get('screen').width - 28) / 7, height:'100%',  justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=> openSheet(dateString)}>
              <AntDesign name="plus" size={24} color="gray" />
        </TouchableOpacity>
       </View>

    )
  }

 
 
  

  return (
    <View style={{width:(Dimensions.get('screen').width - 28) / 7, height:'100%', padding:2}}>
      <View style={{height:'100%', backgroundColor:'white', width:'100%'}}>
          <Text>{condition}</Text>
      </View>
    </View>
  )
}

export default MyFlower