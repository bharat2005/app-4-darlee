import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import DateInputCard from '../../Shared/DateInputCard'

const DOB = ({width, values, setFieldValue}) => {
  const [open, setOpen] = useState(false)


  return (
    <View style={{width, flex:1, backgroundColor:'yellow'}}>

<DateInputCard title='Select DOB' date={values?.dob} changeDate={date => setFieldValue('dob', date)}  />

    </View>
  )
}

export default DOB