import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import { title } from 'process'
import Favorite from '../../src/components/Main/ContentFav/Fav/Favorite'
import Content from '../../src/components/Main/ContentFav/Content/Content'
import ContentFavTabBar from '../../src/components/Main/ContentFav/ContentFavTabBar'

const ContentFav = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {titleText: 'Content', keyId: 'content'},
    {titleText: 'Favorite', keyId: 'fav'},
  ])


  const renderScene = ({route}) => {

    switch(route.keyId){
      case 'content':
        return <Content  />
      case 'fav':
        return <Favorite />
    }
  }
  


  return (
   <SafeAreaView style={{flex:1}} edges={['top']}>

<ContentFavTabBar routes={routes} setIndex={setIndex} index={index} />

    

    <TabView 
    initialLayout={{width:Dimensions.get('screen').width}}
    onIndexChange={setIndex}
    renderTabBar={()=> null}
    renderScene={renderScene}
    navigationState={{index, routes}}
    swipeEnabled={false}
    />


   </SafeAreaView>
  )
}

export default ContentFav