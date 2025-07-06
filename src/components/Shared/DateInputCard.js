import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { format } from 'date-fns'
import DatePicker from 'react-native-date-picker'

const DateInputCard = ({title= 'DateTitle', date, changeDate}) => {
  const [open, setOpen] = useState(false)
  return (
    <View style={{width:Dimensions.get('screen').width, padding:18, height:240}}>

        <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'white', padding:12, justifyContent:'space-between'}}>

        <Text style={{fontSize:24, fontWeight:'500'}}>
            {title}
        </Text>


<View>
    <TouchableOpacity onPress={()=>setOpen(true)} style={{padding:12, backgroundColor:'lightgray'}}>
        <Text>{format(date, 'yyyy/MM/dd')}</Text>
      </TouchableOpacity>
</View>





      <DatePicker
      modal
      mode='date'
      title={'Select DOB'}
      open={open}
      date={date}
      theme='light'
      onCancel={()=> setOpen(false)}
      onConfirm={(date)=> {
     changeDate(date)
        setOpen(false)
      }}
      />
            

        </View>
    
    </View>
  )
}

export default DateInputCard