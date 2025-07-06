import { View, Text, Dimensions, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native'
import ChatMessage from './ChatMessage'
import ScrollToButton from './ScrollToButton'
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const ChatMessageList = ({messages, loading }) => {
  const flatListRef = useRef()
  const scrollValue = useSharedValue(0)


  const scrollHandle = useAnimatedScrollHandler((e)=> {
   // scrollValue.value = e.contentOffset.y

   if(e.contentOffset.y > 100){
    scrollValue.value = withTiming(1, {duration:200})
   } else {
    scrollValue.value = withTiming(0, {duration:200})
   }

  })


  const scrollAnimationStyle = useAnimatedStyle(()=> {
    // const opacity = interpolate(
    //   scrollValue.value,
    //   [100,160],
    //   [0,1],
    //   Extrapolation.CLAMP
    // )

    // return {
    //   opacity
    // }
    return{
      opacity: scrollValue.value,
      transform:[
        {
          scale: withTiming(scrollValue.value ? 1 : 0.9 , {duration: 200})
        }
      ]
    }
  })

    const handleScrollButton = () => {
      if(flatListRef.current){
        flatListRef.current.scrollToIndex({index:0, animation:true})
      }
    }
  



  return (
 

          <View  style={{flex:1, backgroundColor:'pink', paddingHorizontal:12}}>

      <Animated.FlatList
      onScroll={scrollHandle}
      ref={flatListRef}
     inverted
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ loading && <View style={{flexDirection:'row', paddingHorizontal:12, paddingVertical:12}} ><ActivityIndicator color={'black'} size='small' /></View>}
      data={messages}
      renderItem={({item, index})=> <ChatMessage item={item} index={index} />}
      keyExtractor={(item, index)=> index.toString()}
      
      />



        <ScrollToButton 
        scrollAnimationStyle={scrollAnimationStyle} handleScrollButton={handleScrollButton} 
        />

  
    
    </View>


  )
}

export default ChatMessageList