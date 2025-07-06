import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import StarButton from './StarButton'

const Card = ({cardData}) => {
  return (
    <View style={{height:'100%', width:160, padding:6}}>

        <TouchableOpacity onPress={()=> router.push({pathname:'/cardScreen', params: {cardId: cardData?.docId, id: cardData?.id}})} activeOpacity={0.7} style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'black', justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white', textAlign:'center'}}>
          {cardData?.titleText}
        </Text>

        <View>
          <StarButton cardData={cardData} cardId={cardData?.docId} typeId={cardData?.type}/>
        </View>
        </TouchableOpacity>
     
    </View>
  )
}

export default Card