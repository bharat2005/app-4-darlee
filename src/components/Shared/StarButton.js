import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useMuteStar } from '../../hooks/useMutateStar';
import { useStar } from '../../hooks/useStar';

const StarButton = ({cardId, typeId, cardData}) => {
  const {data, error} = useStar(cardId, typeId)
  const {mutate, error:err} = useMuteStar(cardId, typeId)


  return (
<Pressable onPress={()=> mutate({isStared: data, cardData,})}>
    <AntDesign name={!data ? "staro" : 'star'} size={24} color={!data ? "gray" : 'yellow'}/>
</Pressable>
  )
}

export default StarButton