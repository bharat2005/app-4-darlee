import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FavCardList, {} from '../../../Shared/FavCardList'

const FavTypeLists = [
  {
    title:'Your Self CAre Fav',
    typeId:'selfCare'
  },
    {
    title:'Your Hormone Guide Fav',
    typeId:'hormoneGuide'
  },
]

const Favorite = () => {




  return (
      <View style={{flex:1, width:'100%'}}>
          
      <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap:32, paddingTop:12}}
      data={FavTypeLists}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={({item, index})=> <FavCardList data={item} />}
      
      />
      </View>
  )
}

export default Favorite