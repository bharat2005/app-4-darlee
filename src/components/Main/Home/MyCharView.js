import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import MyFlower from './MyFlower'
import { dateToWeek } from '../../../utils/dateToWeek'
import { format, parseISO, startOfISOWeek } from 'date-fns'


const MyCharView = ({selectedDate}) => {
  const a = format(startOfISOWeek(parseISO(selectedDate)), 'yyyy-MM-dd')
    const weekArray = dateToWeek(a)


  return (
    <View>

        <FlatList
        scrollEnabled={false}
        data={[...weekArray]}
        horizontal
        contentContainerStyle={{width:Dimensions.get('screen').width,height:100, paddingHorizontal:14}}
        renderItem={({item, index})=> <MyFlower dateString={item}  /> }
        />
      
    </View>
  )
}

export default MyCharView