import { View, Text, Pressable } from 'react-native'
import React from 'react'
import DayComponent from '../../Main/Calender/DayComponent';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { format } from 'date-fns'
import { useAreMarked } from '../../../hooks/useAreMarked';

const MyCalenderList = ({onPress}) => {
  const {data, error} = useAreMarked()


   const renderHeader = (date) => (
      <View style={{height:40,width:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text>{format(date, "yyyy 'y' M 'mon")}</Text>
      </View>
    )

  


  return (
    <View style={{flex:1}}>
    <CalendarList
    renderHeader={renderHeader}
    futureScrollRange={2}
    pastScrollRange={2}
    dayComponent={({state, date})=> <DayComponent isMarked={data && data[date.dateString]}  onPress={onPress} state={state} date={date}/>}
    theme={{
      textSectionTitleColor:'transparent'
    }}
    
    />
    </View>
  )
}

export default MyCalenderList