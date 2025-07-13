import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useCurrentUser } from '../../src/hooks/useCurrentUser'
import { Button, TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { useDetailChange } from '../../src/hooks/useDetailChange'

const SettingsScreen = () => {
  const {id} = useLocalSearchParams()

  const {data: userData} = useCurrentUser()
  const [nickName, setNickName] = useState(userData?.name)
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(userData?.dob.toDate())
  const [oldEmail, setOldEmail] = useState(userData?.email)
  const {mutateAsync, error} = useDetailChange()
  const [loading, setLoading] = useState(false)
  const [oldPasword, setOldPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')

    console.log(error)
  
const data = {
  name: {
    headerText:'NickName Change',
    text: 'Change yourn nickname. Enter a new nickname',
    value: nickName

  },
  dob: {
    headerText:'Date of Birth Change',
    text: 'Change yourn dob. Enter a new dob',
    value: date

  },
  email: {
    headerText:'Change Eamil',
    text: `Change your email ${userData?.email}, enter new email`,
    value: newEmail

  },
  password: {
    headerText:`Change password`,
    text:`Change your password, enter new password`,
  },

}


const handleChangePress = async() => {
  setLoading(true)
  await mutateAsync({id, value: data[id]?.value , email:oldEmail, password:oldPasword }, {
    onError:()=>{
  setLoading(false)
  router.back()
    } 
  })

}



  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{width:'100%', height:55, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{position:'absolute', marginHorizontal:12, left:0}} onPress={()=> router.back()}>
          <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>
        <Text>{data[id]?.headerText}</Text>
      </View>

      <View>
        <Text style={{color:'gray', textAlign:'center'}}>{data[id]?.text}</Text>
      </View>

     {
      id === 'name' && (
        <TextInput value={nickName} onChangeText={(v)=> setNickName(v)} right={<TextInput.Icon icon={'close'} onPress={()=> setNickName('')}/>} />
      )
     }

      {
      id === 'dob' && (<>
      
      <TouchableOpacity onPress={()=> setOpen(true)} style={{height:55, width:180, backgroundColor:'gray', alignSelf:'center'}} />
   
             <DatePicker
        modal
        open={open}
        mode='date'
        title={'Date of Birth'}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
         </>
      )
     }



<View style={{height:50, width:'100%', padding:2, marginVertical:12}}>
<Button mode='contained' disabled={loading} loading={loading} onPress={handleChangePress} style={{ justifyContent:'center', alignItems:'center'}} >
  Change
</Button>
</View>





     


   
    </SafeAreaView>
  )
}

export default SettingsScreen