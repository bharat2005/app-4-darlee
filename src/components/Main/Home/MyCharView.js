import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import MyFlower from './MyFlower'
import { dateToWeek } from '../../../utils/dateToWeek'


const MyCharView = ({selectedDate, isFuture}) => {
    const weekArray = dateToWeek(selectedDate)


  return (
    <View>

        <FlatList
        scrollEnabled={false}
        data={[...weekArray]}
        horizontal
        contentContainerStyle={{width:Dimensions.get('screen').width,height:100, paddingHorizontal:14}}
        renderItem={({item, index})=> <MyFlower dateString={item} isFuture={isFuture} /> }
        />
      
    </View>
  )
}

export default MyCharView