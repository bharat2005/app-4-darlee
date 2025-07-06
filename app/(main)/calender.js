import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabScreenTopBar from '../../src/components/Shared/TabScreenTopBar'
import MyCalenderList from '../../src/components/Main/Calender/MyCalenderList'
import { router } from 'expo-router'
import MyBottomSheet from '../../src/components/Shared/MyBottomSheet'

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const sheetRef = useRef(null)


  return (
    <SafeAreaView style={{flex:1}}edges={['top']}>

    <TabScreenTopBar title='Calender' />

    <MyCalenderList onPress={(date)=> { setSelectedDate(date) ;sheetRef.current.present(); }} />

    <MyBottomSheet sheetRef={sheetRef} selectedDate={selectedDate}  />

    </SafeAreaView>
  )
}

export default Calender