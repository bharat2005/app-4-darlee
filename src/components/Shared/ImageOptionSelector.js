import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import OptionHeader from './OptionHeader'

const ImageOptionSelector = ({data, onPress, value}) => {

const renderItem = ({item, index}) => (
    <Pressable key={index} onPress={()=> value !== item?.optionId ? onPress(item?.optionId) : onPress('')} style={{width:'20%'}}>
         <Image style={{height:50, width:'100%', backgroundColor:value === item?.optionId ? 'blue' : 'pink'}}/>

        <Text style={{textAlign:'center'}}>{item?.optionName}</Text>

    </Pressable>
)


  return (
    <View style={{width:'100%'}}>
        
    <OptionHeader data={data} />

    <View style={{width:'85%', marginHorizontal:'auto', flexWrap:'wrap', flexDirection:'row'}}>

        {
            data?.options.map((item, index) =>(
                <>
                {renderItem({item, index})}
                </>
            ))
        }


     </View>


    </View>
  )
}

export default ImageOptionSelector