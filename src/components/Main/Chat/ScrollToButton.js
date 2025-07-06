import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'


const ScrollToButton = ({handleScrollButton, scrollAnimationStyle}) => {

  return (
    <Animated.View style={[{position:'absolute', bottom:0, right:0, height:80, width:80, padding:12, elevation:4}, scrollAnimationStyle]}>
    <Pressable onPress={handleScrollButton} style={{height:'100%', width:'100%', borderRadius:'50%', backgroundColor:'cyan'}}>
        
    </Pressable>
    </Animated.View>
  )
}

export default ScrollToButton