import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { useMyRecords } from '../../../hooks/useMyRecords'
import { RotateOutUpLeft } from 'react-native-reanimated'

const MyRecordView = ({selectedDate, onRecordPress}) => {
    const {data} = useMyRecords(selectedDate)

    const newData = useMemo(()=> {
        if (!data) return false
        const {condition, heart, message, body} = data
        const myObj =  {condition, heart, message, body}

        const filtered = Object.values(myObj).filter(item => item !== '')
       


        return filtered.length > 0 ? filtered : false
     
    
    },[data])


    const renderItem = ({item, index}) => (
        <View key={index} style={{width:40}}>
            <Image style={{height:40, width:'100%', backgroundColor:'pink'}}/>
            <Text numberOfLines={1}>{item}</Text>

        </View>
    )



    if(!newData) {
        return (
             <View style={{flex:1, width:'100%'}}>
                <Text>Record</Text>

                   <View style={{width:'100%', alignItems:'center', justifyContent:'center', marginTop:'auto'}}>

            <TouchableOpacity onPress={onRecordPress} style={{justifyContent:'center', alignItems:'center', backgroundColor:'red', padding:12}} >
                <Text>Record</Text>
            </TouchableOpacity>

        </View>
             </View>
        )
    }

  return (
    <View style={{flex:1, width:'100%'}}>




    <View style={{ padding:12, flexWrap:'wrap', justifyContent:'center', flexDirection:'row',gap:3, alignItems:'center'}}>


        {
            [...newData].map((item, index)=> (
                <>
                {
                    renderItem({item, index})
                }
                </>
            ))
        }






    
    </View>

    
        <View style={{width:'100%', alignItems:'center', justifyContent:'center', marginTop:'auto'}}>

            <TouchableOpacity onPress={onRecordPress} style={{justifyContent:'center', alignItems:'center', backgroundColor:'red', padding:12}} >
                <Text>Record</Text>
            </TouchableOpacity>

        </View>
            </View>
  )
}

export default MyRecordView