import { addDays, format, parseISO, subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const getIndexByDay = (dateString) => {
  const index = new Date(dateString).getDay();
  return (index + 6) % 7;
};

const MyWeekList = ({ handlePress }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  console.log(selectedDate)

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

  return (
    <View style={{ }}>
  
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Button title="← Previous" onPress={goToPrevWeek} />
        <Button title="Next →" onPress={goToNextWeek} />
      </View>

      <GestureDetector gesture={panGesture} >
        <View collapsable={false} style={{height:120}}>

       
        <CalendarProvider date={selectedDate}>
          <WeekCalendar
            firstDay={1}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: 'black',
            }}
          />
        </CalendarProvider>
 </View>
      </GestureDetector>
    </View>
  );
};

export default MyWeekList;
