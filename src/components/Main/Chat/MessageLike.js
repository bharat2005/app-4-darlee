import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFetchLikeDisLike } from '../../../hooks/useFetchLikeDisLike'
import { useLikeDisLike } from '../../../hooks/useLikeDisLike';

const responseButtons = [
    {
        id: 'like',
        icon: <AntDesign name="like2" size={18} color="black" /> 
    },
        {
        id: 'dislike',
        icon: <AntDesign name="dislike2" size={18} color="black" />
    }
]

const MessageLike = ({id}) => {
    const {data: currentResponse, error:err} = useFetchLikeDisLike(id)
    const {mutate, error} = useLikeDisLike(id)

  return (
    <View style={{flexDirection:'row', gap:18, paddingHorizontal:12, paddingVertical:4}}>

        {
            responseButtons.map((item, index)=> (
                <Pressable onPress={()=> mutate({userResponse : item?.id, currentResponse})} key={item?.id} style={{backgroundColor:currentResponse === item?.id ? 'blue' : 'white', padding:4, borderRadius:'50%'}}>
                    {item?.icon}
                </Pressable>
            ))
        }


     
    


    </View>
  )
}

export default MessageLike