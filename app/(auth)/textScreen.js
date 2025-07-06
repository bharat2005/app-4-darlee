import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useText } from '../../src/hooks/useText'
import { router, useLocalSearchParams } from 'expo-router'
import { useAgreementStore } from '../../src/stores/useAgreementStore'

const TextScreen = () => {
    const {textType} = useLocalSearchParams()
    const {data, error} = useText(textType)

    const markTermsRead = useAgreementStore((s)=> s.markTermsRead)
    const markPrivacyRead = useAgreementStore((s)=> s.markPrivacyRead)

    const handleClose = () => {
        if (textType === 'terms') markTermsRead()
        if (textType === 'privacy') markPrivacyRead()

            router.back()

    }

  

  return (
    <View style={{flex:1, paddingTop:120}}>
      <Text>{data?.text}</Text>

      <View style={{width:Dimensions.get('screen').width, height:80, flexDirection:'row', padding:12, position:'absolute', bottom:80, justifyContent:'space-between'}}>

    {
        (data && textType === 'terms') && (
            <Text>Terms</Text>
        )
    }
        {
       (data && textType === 'privacy') && (
            <Text>Privacy</Text>
        )
    }

    {
        data && (
            <TouchableOpacity style={{padding:12, backgroundColor:'black', }} onPress={handleClose}>
                <Text style={{color:'white'}}>Close</Text>
            </TouchableOpacity>
        )
    }

      </View>
    </View>
  )
}

export default TextScreen