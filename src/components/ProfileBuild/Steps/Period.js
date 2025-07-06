import { View, Text } from 'react-native'
import React from 'react'
import DateInputCard from '../../Shared/DateInputCard'
import NumberInputCard from '../../Shared/NumberInputCard'

const Period = ({width, values, setFieldValue}) => {
  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>

      <DateInputCard title='Recent Period Datte' date={values?.recentPeriodDate} changeDate={date => setFieldValue('recentPeriodDate', date)} />

        <NumberInputCard title='Peiod Duration' number={values?.periodDaysLength} typeNumber={'periodDaysLength'} changeNumber={(number)=> setFieldValue('periodDaysLength',number )} />

        <NumberInputCard title='Menstrual Cycle' number={values?.menstrualCycleLength} typeNumber={'menstrualCycleLength'}  changeNumber={(number)=> setFieldValue('menstrualCycleLength',number )} />
      
    </View>
  )
}
export default Period