import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'

const SubOptions = ({subTitle='SubTitle', options, bool, onOptionPress,value}) => {

if(!bool) return

const renderItem = ({item, index}) => (
    <View key={index} style={{width:'100%'}}>
        <Text>{item?.title}</Text>

        <View style={{width:'100%'}}>

            {
                item?.subOptions.map((item2, index2) => (
                    <View key={item2} style={{height:50, width:'100%', padding:4}}>
                        <Pressable onPress={()=> onOptionPress({[item?.id]: item2 === value[item?.id] ?  '' : item2})} style={{height:'100%', width:'100%', borderRadius:12, backgroundColor: item2 === value[item?.id] ? 'blue' : 'lightgray', justifyContent:'center', alignItems:'center'}}>
                                <Text>{item2}</Text>
                        </Pressable>
                    </View>
                ))
            }

        </View>

    </View>
)


  return (
    <View style={{width:'90%', marginLeft:'auto'}}>
      <Text>{subTitle}</Text>

      <View style={{width:'100%', borderWidth:1,padding:8, borderColor:'lightgray', borderRadius:8}}>
        {
            options.map((item, index) => (
                <>
                {renderItem({item, index})}
                </>
            ))
        }

      </View>


    </View>
  )
}

export default SubOptions