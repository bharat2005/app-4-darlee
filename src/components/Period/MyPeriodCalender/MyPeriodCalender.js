import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { CalendarList } from 'react-native-calendars'
import { eachDayOfInterval, format, parse, parseISO, startOfDay } from 'date-fns'
import Toast, {} from 'react-native-toast-message'

const MyPeriodCalender = ({setPeriods, periods}) => {
      const [currentStart, setCurrentStart] = useState(null)

      
    
    const handleDayPress = (day) => {
      const date  = day.dateString
      if (new Date < new Date(date)) {
        Toast.show({type:'my_custome_toaste', text1:'Sorry', text2: "You cant click on fututer dates", props: {success: true}})
         return
        }
    
      const existingDateIndex  =  periods.findIndex(({start, end}, index)=> {
        const range = eachDayOfInterval({start: parseISO(start), end: parseISO(end)}).map(item => format(item, 'yyyy-MM-dd'))
        return range.includes(date)
      })
      if(existingDateIndex !== -1){
        setPeriods(prev => prev.filter((item, index)=> index !== existingDateIndex))
        setCurrentStart(null)
        return
      }
    
        if(!currentStart){
          setCurrentStart(date)
        } else {
          if(new Date(date).getTime() == new Date(currentStart).getTime()){
            setCurrentStart(null)
          } else {
            const a = new Date(date) < new Date(currentStart)
            ?
            {start:date, end: currentStart, phase:'period', source: 'user'}
            :
            {start:currentStart, end: date, phase:'period', source: 'user'}
            setPeriods(prev => [...prev, a])
            setCurrentStart(null)
          }
        }
    
    }

    const getMarkedDates = () => {
      const markedObj = {}
      periods.forEach(item => {
        if(item?.phase !== 'period') return
        const range = eachDayOfInterval({start:parseISO(item?.start), end: parseISO(item?.end)}).map(item => format(item, 'yyyy-MM-dd'))
        range.forEach((dateString, index) => {
          if(index === 0) {
            markedObj[dateString] = {startingDay: true, color: item?.source === 'user' ? 'pink' : 'tomato', textColor:'white'}
          } else if (index === (range.length -1 )){
            markedObj[dateString] = {endingDay: true, color: item?.source === 'user' ? 'pink' : 'tomato',  textColor:'white'}
          } else {
            markedObj[dateString] = {color: item?.source === 'user' ? 'yellow' : 'tomato',  textColor:'white'}
          }
        })
      })

      if(currentStart && (periods.some(p => p?.start !== currentStart) || periods.length === 0 )){
        markedObj[currentStart] = {startingDay: true, endingDay:true,  color:'pink', textColor:'white'}
      }
      return markedObj
    }




    
  return (
    <View style={{flex:1, width:'100%'}}>
    
          <CalendarList
          futureScrollRange={2}
          pastScrollRange={2}
          theme={{
            todayTextColor:'red',
            todayBackgroundColor:'yellow'
          }}
          markingType='period'
          markedDates={getMarkedDates()}
          onDayPress={handleDayPress}
          />
    
    </View>
  )
}

export default MyPeriodCalender