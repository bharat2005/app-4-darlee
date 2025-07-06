import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useAuth } from '../../contexts/AuthContextProvider'

const RegisterBox = () => {
    const {registerWithEmail} = useAuth()
    const validation = Yup.object({
       email: Yup.string().required('Required').email('It ahs to be email') ,
       password : Yup.string().required('Requiered').min(6, 'Must be 6 char long')
    })

    const handleSubmit = async(values) => {
        await registerWithEmail(values.email, values.password)
    }
  return (
    <View style={{height:'50%', width:'100%'}}>
        <Formik
        onSubmit={handleSubmit}
        initialValues={{email:'', password:''}}
        validationSchema={validation}
        >
            {({handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, setFieldTouched, setFieldValue, isSubmitting})=> (
                <View>




    <TextInput 
    value={values.email}
        placeholder='email'
        onBlur={handleBlur('email')}
        onChangeText={handleChange('email')}
        error={(touched.email=== true && errors.email)}
        />
        <HelperText visible={(touched.email=== true && errors.email)} style={{color:'red'}}>
            {errors.email}
        </HelperText>


            <TextInput 
    value={values.password}
        placeholder='password'
        onBlur={handleBlur('password')}
        onChangeText={handleChange('password')}
        error={(touched.password=== true && errors.password)}
        />
        <HelperText visible={(touched.password=== true && errors.password)} style={{color:'red'}}>
            {errors.password}
        </HelperText>


                <Button onPress={handleSubmit} loading={isSubmitting} disabled={isSubmitting} mode='contained'>
                    Register
                </Button>

                </View>
            )}



        </Formik>
 

    </View>
  )
}

export default RegisterBox