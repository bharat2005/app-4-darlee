import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { router } from 'expo-router'
import { usePeriods } from '../../../hooks/usePeriods'
import { differenceInCalendarDays, isAfter, isWithinInterval, parse, parseISO } from 'date-fns'

const InCircleView = ({selectedDate}) => {
    console.log(selectedDate)
    const {data:periods} = usePeriods()
    const textMessage = useMemo(()=> {
        if(periods?.length > 0){
            const periodsRange = periods.filter(item => {
                const today = parseISO(selectedDate)
                const start = new Date(item?.start)
                const end = new Date(item?.end)
                return isWithinInterval(today,{start, end}) || isAfter(start, today)

            }
            ).sort((a,b)=> new Date(a?.start) - new Date(b?.start))
          
            const firstRange = periodsRange[0]
            const today = parseISO(selectedDate)
            const start = parseISO(firstRange?.start)
            const end = parseISO(firstRange?.end)

            if(isWithinInterval(today, {start, end})){
                return `${differenceInCalendarDays(today, start) + 1}nd day of periods`
            } else if(isAfter(start, today)) {
                return `${differenceInCalendarDays(start, today)} days left for periods`
            }
        } else {
            return 'No periods yet'
        }
    }, [periods, selectedDate])


  return (
    <View style={{flex:1, width:'100%', justifyContent:'center', alignItems:'center', paddingVertical:'30%'}}>

          <Text style={{fontSize:18, fontWeight:'800', color:'white', textAlign:'center'}}>{textMessage}</Text>

    <TouchableOpacity onPress={()=>router.push('/periodCalenderScreen')} style={{height:50, width:'50%', borderRadius:12, alignSelf:'center', backgroundColor:'gray', alignSelf:'center', marginTop:'auto'}}>
        <Text>Track Periods</Text>
    </TouchableOpacity>
          
 
    </View>
  )
}

export default InCircleView