import { View, Text } from 'react-native'
import React from 'react'

const TopDots = ({dotNumber, currentIndex}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'center',  alignItems:'center', paddingVertical:12, width:'100%', gap:12}}>

        {
            [...Array(dotNumber)].map((item, index) => (
            <View key={index} style={{height:6, width:index===currentIndex ? 24 :6 , backgroundColor:index === currentIndex ? 'black' :'gray', borderRadius: 12}} />
            ))
        }
     


    </View>
  )
}

export default TopDots