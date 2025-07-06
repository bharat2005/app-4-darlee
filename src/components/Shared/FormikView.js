import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import ImageOptionSelector from './ImageOptionSelector'
import FormikViewButton from './FormikViewButton'
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context'
import imageOptions from '../../constants/imageOptions'
//import { ScrollView } from 'react-native-actions-sheet'
import BoolOptionSelector from './BoolOptionSelector'
import boolOptions from '../../constants/boolOptions'
import NormalBool from './NormalBool'
import * as Yup from 'yup'
import { router } from 'expo-router'
import FeildSelector from './FeildSelector'
import feildOptions from '../../constants/feildOptions'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'

const initialValues = {
    condition: '',
    duringMesuration: {isDuringMensuration: false, pain:'', volumn:''},
    heart:'',
    body:'',
    message: '',
    amountOfDischarge: {amount: 'None', situation:'', color:''},
    abnormalBleeding: false,
    medecine:'',
    temperature:'',
    weight:'',
    time:''

}




const FormikView = ({initialDateBack, mutate, selectedDate, sheetRef, mutateAsync}) => {
    const validation = Yup.object({
        temperature: Yup.number().min(35, 'Tempereaturen should be between 35.00 and 41.00').max(41, 'Tempereaturen should be between 35.00 and 41.00'),
        weight: Yup.number().min(20, 'Weifght should be between 20.00 and 199.99').max(199, 'Weifght should be between 20.00 and 199.99'),
        time:  Yup.number().min(0, 'Time should be between 00.00 and 24.00').max(24, 'Time should be between 00.00 and 24.00'),
    })

    const handleSubmit = (values) => {
   
         mutate({data: values})
        setTimeout(()=> sheetRef.current.close(), 500)

      
    }
  return (
  
                    <Formik
                    key={selectedDate}
                    onSubmit={handleSubmit}
                    initialValues={initialDateBack ? initialDateBack : initialValues }
                    validationSchema={validation}
                    >
            {({setFieldValue, values, handleSubmit, touched, handleBlur, errors, handleChange, isSubmitting})=>(
                <View style={{flex:1}}>
              <BottomSheetScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 12, gap:32}}>


                    <ImageOptionSelector data={imageOptions?.ConditionOption} value={values?.condition} onPress={(v)=> setFieldValue('condition', v)} />

                    <BoolOptionSelector
                    bool={values?.duringMesuration?.isDuringMensuration} 
                    data={boolOptions?.DuringMensuration} 
                    value={values?.duringMesuration} 
                    onButtonPress={(v)=>  {
                        if(v){
  setFieldValue('duringMesuration', {...values?.duringMesuration, isDuringMensuration:v  })
                        } else {
  setFieldValue('duringMesuration', { pain:'', volumn:'', isDuringMensuration:v  })
                        }      
                      } }
                    onOptionPress={(v)=> setFieldValue('duringMesuration', {...values?.duringMesuration, ...v})}
                    />

                    <ImageOptionSelector data={imageOptions?.HeartOption} value={values?.heart} onPress={(v)=> setFieldValue('heart', v)} />

                    <ImageOptionSelector data={imageOptions?.BodyOption} value={values?.body} onPress={(v)=> setFieldValue('body', v)} />

                    <ImageOptionSelector data={imageOptions?.Messagee} value={values?.message} onPress={(v)=> setFieldValue('message', v)} />


                <BoolOptionSelector 
                    discharge = {true}
                    bool={values?.amountOfDischarge?.amount !== 'None'}
                    data={boolOptions?.VaginalDischarge} 
                    value={values?.amountOfDischarge} 
                    onButtonPress={(v)=> {
                            if(v !== 'None'){
                                
                         setFieldValue('amountOfDischarge', {...values?.amountOfDischarge, amount:v  })
                            } else {
                                
                         setFieldValue('amountOfDischarge', { situation:'', color:'', amount:v  })
                            }
                    }}
                    onOptionPress={(v)=> setFieldValue('amountOfDischarge', {...values?.amountOfDischarge, ...v})}
                    />

                    <NormalBool 
                    value={values?.abnormalBleeding}
                    onButtonPress={(v)=> setFieldValue('abnormalBleeding', v)}
                    data={boolOptions?.AbnormalBleeding}
                    />

                    

                    <ImageOptionSelector data={imageOptions?.Medecine} value={values?.medecine} onPress={(v)=> setFieldValue('medecine', v)} />


                    <FeildSelector 
                    value={values?.temperature}
                    data={feildOptions?.Temperature} 
                    onChangeText={handleChange('temperature')} 
                    onBlur={handleBlur('temperature')} 
                    error={errors?.temperature} 
                    touch={touched?.temperature} 
                    />

                    
                    <FeildSelector 
                    value={values?.weight}
                    data={feildOptions?.Weight} 
                    onChangeText={handleChange('weight')} 
                    onBlur={handleBlur('weight')} 
                    error={errors?.weight} 
                    touch={touched?.weight} 
                    />


                                     
                    <FeildSelector 
                    value={values?.time}
                    data={feildOptions?.Time} 
                    onChangeText={handleChange('time')} 
                    onBlur={handleBlur('time')} 
                    error={errors?.time} 
                    touch={touched?.time} 
                    />


                </BottomSheetScrollView>


                <FormikViewButton handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
                 </View>
            )}
        </Formik>




  )
}

export default FormikView