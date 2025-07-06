import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view'
import SelfCare from './SelfCare'
import HormoneGuide from './HormoneGuide'
import ContentTabBar from './ContentTabBar'

const Content = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {title: 'Self Care', key: 'selfCare'},
    {title: 'Hormone Guide', key: 'hormoneGuide'},
  ])


  const renderScene = ({route}) => {
    const props = { typeId:route.key  }
    switch(route.key){
      case 'selfCare':
        return <SelfCare {...props} />
      case 'hormoneGuide':
        return <HormoneGuide {...props}  />
    }
  }


  return (
    <View style={{flex:1, width:'100%'}}>

      <ContentTabBar routes={routes}  index={index} setIndex={setIndex}/>


      <TabView 
      renderTabBar={()=> null}
      renderScene={renderScene}
      onIndexChange={setIndex}
      navigationState={{index, routes}}
      swipeEnabled={false}
      initialLayout={{width:Dimensions.get('screen').width}}
       />
  
    </View>
  )
}

export default Content