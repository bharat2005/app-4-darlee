import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import CardListTitle from './CardListTitle'
import Card from './Card'
import { useInfinteCards } from '../../hooks/useInfinteCards'
import { locallyTitleGen } from '../../utils/locallyTitleGen'
import { useFavCards } from '../../hooks/useFavCards'

const FavCardList = ({data}) => {
  const {data:cardsList, error} = useFavCards(data?.typeId)



  





if(cardsList?.length === 0) return

  return (
    <View style={{height:180}}>

        <CardListTitle listData={data} />
        
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={cardsList}
        keyExtractor={(item ,index) => index.toString()}
        renderItem={({item, index})=> <Card  cardData={item} />}
        />


    </View>
  )
}

export default FavCardList