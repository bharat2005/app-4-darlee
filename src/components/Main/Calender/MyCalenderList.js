import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import DayComponent from '../../Main/Calender/DayComponent';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { eachDayOfInterval, format, parseISO } from 'date-fns'
import { useAreMarked } from '../../../hooks/useAreMarked';
import { usePeriods } from '../../../hooks/usePeriods'


const MyCalenderList = ({onPress}) => {
  const {data, error} = useAreMarked()
  const {data:periods} = usePeriods()


   const renderHeader = (date) => (
      <View style={{height:40,width:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text>{format(date, "yyyy 'y' M 'mon")}</Text>
      </View>
    )

    const getMarkedDates = () =>{
      const markedObj = {}
      const colorTypes = {
      period: 'red',
      follicular:'blue',
      ovulation:'cyan',
      luteal:'gray'
    }

      periods?.forEach(item => {
      const range = eachDayOfInterval({start: parseISO(item?.start), end: parseISO(item?.end)}).map(item => format(item, 'yyyy-MM-dd'))
      range.forEach((dateString, index) => {
        markedObj[dateString] = {phaseColor: colorTypes[item?.phase] }
      })
      })

      return markedObj
      
    }



  return (
    <View style={{flex:1}}>
    <CalendarList
    renderHeader={renderHeader}
    futureScrollRange={2}
    markedDates={getMarkedDates()}
    pastScrollRange={2}
    dayComponent={({state, date, marking})=> <DayComponent phaseColor={marking?.phaseColor} isMarked={data && data[date.dateString]}  onPress={onPress} state={state} date={date}/>}
    theme={{
      textSectionTitleColor:'transparent'
    }}
    
    />
    </View>
  )
}

export default MyCalenderList