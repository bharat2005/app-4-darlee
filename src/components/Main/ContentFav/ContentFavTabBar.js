import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'

const ContentFavTabBar = ({routes, setIndex, index}) => {
  return (
    <View style={{height:48, width:Dimensions.get('screen').width, flexDirection:'row'}}>

        {
            routes.map((item, i) => (
                <View key={i} style={{flex:1, height:'100%'}}>
                    <Pressable onPress={()=> setIndex(i)} android_ripple={{color:'lightgray'}} style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Text>{item?.titleText}</Text>
                    </Pressable>

                {index === i && (
                    <View style={{height:4, width:'100%', backgroundColor:'black', marginHorizontal:'auto'}} />
                )}
                </View>
            ))
        }


    </View>
  )
}

export default ContentFavTabBar