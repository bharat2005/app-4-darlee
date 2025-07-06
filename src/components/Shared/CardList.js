import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import CardListTitle from './CardListTitle'
import Card from './Card'
import { useInfinteCards } from '../../hooks/useInfinteCards'

const CardList = ({listData}) => {
  const {data, hasNextPage, isFetchingNextPage, fetchNextPage, error} = useInfinteCards(listData?.id)

  const cleanedList = useMemo(()=> (
    data?.pages?.flatMap(page => page.list)
  ))



  return (
    <View style={{height:180}}>

        <CardListTitle listData={listData} />
        
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        onEndReachedThreshold={0}
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        contentContainerStyle={{paddingHorizontal:6}}
        data={cleanedList}
        keyExtractor={(item ,index) => index.toString()}
        renderItem={({item, index})=> <Card  cardData={item} />}
        />


    </View>
  )
}

export default CardList