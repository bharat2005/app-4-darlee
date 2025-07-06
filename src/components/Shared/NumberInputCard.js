import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { format, set } from 'date-fns'
import DatePicker from 'react-native-date-picker'
import { Menu } from 'react-native-paper'

const NumberInputCard = ({title= 'DateTitle', number, changeNumber, typeNumber}) => {
  const [open, setOpen] = useState(false)
  const array = typeNumber === 'periodDaysLength' ? [...Array(15)] : [...Array(28)]



  return (
    <View style={{width:Dimensions.get('screen').width, padding:18, height:240}}>

        <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'white', padding:12, justifyContent:'space-between'}}>

        <Text style={{fontSize:24, fontWeight:'500'}}>
            {title}
        </Text>

<Menu
contentStyle={{width:300, overflow:'hidden', height:400}}
onDismiss={()=> setOpen(false)}
visible={open}
anchor={
     <TouchableOpacity onPress={()=>setOpen(true)} style={{padding:12, backgroundColor:'lightgray'}}>
           <Text>{number}</Text>
        </TouchableOpacity>
}>
  <ScrollView>
  {array.map((item, index)=> (
  <Menu.Item key={index} title={index + 1} onPress={()=> {changeNumber(index+1); setOpen(false)}} />
  ))}
  </ScrollView>


</Menu>







        </View>
    
    </View>
  )
}

export default NumberInputCard