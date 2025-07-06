import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import StarButton from '../../Shared/StarButton';

const CardScreenTopBar = ({cardData}) => {
  return (
    <View style={{height:44, width:Dimensions.get('screen').width, flexDirection:'row', paddingHorizontal:12, alignItems:'center', justifyContent:'space-between'}}>
        <Pressable onPress={()=> router.back()}>
            <Feather name="arrow-left" size={24} color="gray" />
        </Pressable>

        {cardData && (

        <StarButton cardData={cardData} cardId={cardData?.docId} typeId={cardData?.type} />

        )}



    </View>
  )
}

export default CardScreenTopBar