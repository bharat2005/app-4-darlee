import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import CardList from '../../../Shared/CardList'
import { useInfinteContent } from '../../../../hooks/useInfiniteContent'

const SelfCare = ({typeId}) => {
  const {data, fetchNextPage, isFetchingNextPage, error, hasNextPage} = useInfinteContent(typeId)

  
  const cleanedList = useMemo(()=> (
    data?.pages.flatMap(page => page.list)
  ))




  



  return (
    <View style={{flex:1, width:'100%'}}>


      <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap:32, paddingTop:12}}
      data={cleanedList}
      onEndReachedThreshold={0}
      onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={({item, index})=> <CardList listData={item} />}
      
      />
    
    </View>
  )
}

export default SelfCare