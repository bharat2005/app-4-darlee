import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'

const ContentTabBar = ({setIndex, index, routes}) => {
  return (
    <View style={{height:52, width:Dimensions.get('screen').width, flexDirection:'row',  paddingHorizontal:8}}>

    {
        routes.map((item, i)=> (
            <View key={i} style={{ borderRadius:40, overflow:'hidden'}}>
            <Pressable onPress={()=> setIndex(i)} android_ripple={{color:'gray'}} style={{height:'100%', paddingHorizontal:12}}>

                <View style={{height:'60%', width:'100%' , backgroundColor: index === i ? 'lightskyblue' : 'lightgray', borderRadius:24, marginVertical:'auto', justifyContent:'center', paddingHorizontal:12}}>
                        <Text>
                            {item?.title}
                        </Text>
                </View>

            </Pressable>
            </View>
        ))
    }
     
    </View>
  )
}

export default ContentTabBar