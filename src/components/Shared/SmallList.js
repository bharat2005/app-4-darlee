import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SmallList = ({array, dataArray, setFieldValue}) => {
    const [localSelection, setLocalSelection] = useState(dataArray)

const handleOptionSelect = (id) =>{
    const isSelected = localSelection.includes(id)
    let updateList;
    if(isSelected){
        updateList = localSelection.filter(item => item !== id)

    } else {
        updateList = [...localSelection, id]
    }
    setLocalSelection(updateList)
    setFieldValue( 'pmsSymptoms',updateList)
}


  return (
    <View style={{flex:1}}>

    {array.map((item, index)=> (
        <TouchableOpacity activeOpacity={1} key={index} onPress={()=> handleOptionSelect(item?.id)} style={{flex:1, width:'100%', padding:8}}>
            <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'white', flexDirection:'row', justifyContent:"space-between",padding:12}}>
                <Text>{item?.title}</Text>

            {  (localSelection.includes(item?.id))
                 && (
                <View style={{height:28, width:28, backgroundColor:"green"}} />   
                )
            }
               

            </View>
        </TouchableOpacity>
    ))}
     
    </View>
  )
}

export default SmallList