import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyPeriodCalender from '../../src/components/Period/MyPeriodCalender/MyPeriodCalender'
import PeriodHeader from '../../src/components/Period/PeriodHeader/PeriodHeader'
import PeriodsSaveButton from '../../src/components/Period/PreriodsSaveButton'
import { usePeriods } from '../../src/hooks/usePeriods'

const PeirodCalenderScrren = () => {
      const {data =[], error} = usePeriods()
      const [periods, setPeriods] = useState(data )


  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>

    <PeriodHeader />
    
    <MyPeriodCalender {...{periods, setPeriods}} />

    <PeriodsSaveButton periods={periods} />


      

    </SafeAreaView>
  )
}

export default PeirodCalenderScrren