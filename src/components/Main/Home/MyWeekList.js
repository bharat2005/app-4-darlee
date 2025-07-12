import { addDays, eachDayOfInterval, format, parseISO, subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { usePeriods } from '../../../hooks/usePeriods'

const getIndexByDay = (dateString) => {

  const index = new Date(dateString).getDay();
  return (index + 6) % 7;
};

const MyWeekList = ({ handlePress, setSelectedDate, selectedDate }) => {
    const {data: periods = [], error} = usePeriods()




  useEffect(() => {
    handlePress(getIndexByDay(selectedDate));
  }, [selectedDate]);

  const goToNextWeek = () => {
    const nextWeekDate = format(addDays(parseISO(selectedDate), 7), 'yyyy-MM-dd');
    setSelectedDate(nextWeekDate);
  };

  const goToPrevWeek = () => {
    const prevWeekDate = format(subDays(parseISO(selectedDate), 7), 'yyyy-MM-dd');
    setSelectedDate(prevWeekDate);
  };

  const panGesture = Gesture.Pan().onEnd((e)=> {
    //helppp
  })

  const getMarkedDates = () => {
    const markedObj = {}
    const colorTypes = {
      period: 'red',
      follicular:'blue',
      ovulation:'cyan',
      luteal:'gray'
    }
    periods.forEach(item => {
      const range = eachDayOfInterval({start:parseISO(item?.start), end: parseISO(item?.end)}).map(item => format(item, 'yyyy-MM-dd'))

      range.forEach((dateString, index) => {
        markedObj[dateString] = {color:colorTypes[item?.phase], startingDay:index === 0, endingDay: range.length - 1 === index, textColor: 'white', dotColor:'pink', marked:true }
      })
    })
    return markedObj
    
  }



  return (
    <View>
  


      <GestureDetector gesture={panGesture} >
        <View collapsable={false} style={{height:120}}>

       
        <CalendarProvider date={selectedDate}>
          <WeekCalendar
         markingType='period'
          markedDates={getMarkedDates()}
            firstDay={1}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: 'black',
            }}
          />
        </CalendarProvider>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Button title="Prev" onPress={goToPrevWeek} />
        <Button title="Next" onPress={goToNextWeek} />
      </View>
 </View>
      </GestureDetector>
    </View>
  );
};

export default MyWeekList;
