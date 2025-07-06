import { View, Text, Pressable, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React, { use } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { Formik } from 'formik'
import * as Yup from 'yup'


const ForgetPassword = () => {
  const {forgetPassword} = useAuth()
   const validation = Yup.object({
    email: Yup.string().email('Must Be a vaillid email')
   })


   const handleSubmitSend = async(values) => {
    const res = await forgetPassword(values?.email)
    if(res?.success){
      Alert.alert("Success", "Email Sent successFullu", [
        {text:'Cancel', style:'cancel'},
        {text:'Ok', onPress: ()=> router.back()}
      ])
    } else {
      Alert.alert('Error')
    }
   }


  return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <SafeAreaView style={{flex:1}}>
       
      <View style={{flexDirection:'row', padding:8, height:50}}>
  
            <TextInput.Icon icon={'arrow-left'} onPress={()=> router.back()} />

      </View>

      <Formik
      initialValues={{email:''}}
      onSubmit={handleSubmitSend}
      validationSchema={validation}
      >
        
        {({handleChange, values, errors, touched, handleBlur, handleSubmit, isSubmitting})=> (
    

                     <View style={{flex:1}}>
             <TextInput placeholder='eamil'
             value={values.email}
             onBlur={handleBlur('email')}
             onChangeText={handleChange('email')}
             error={!!errors.email && touched.email=== true}

             />
             <HelperText visible={!!errors.email && touched.email=== true} style={{color:'red'}}>
              {errors.email}
             </HelperText>

             <Button disabled={isSubmitting} loading={isSubmitting}  onPress={handleSubmit} mode='contained'>
              Send
             </Button>
          </View>

   
 
        )}


      </Formik>

    

     
    </SafeAreaView>
       </TouchableWithoutFeedback>
  )
}

export default ForgetPassword