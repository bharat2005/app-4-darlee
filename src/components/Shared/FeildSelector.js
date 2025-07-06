import { View, Text } from 'react-native'
import React from 'react'
import OptionHeader from './OptionHeader'
import { HelperText, TextInput } from 'react-native-paper'

const FeildSelector = ({data, touch, onBlur, error, onChangeText, value}) => {
    


  return (
    <View style={{width:'100%'}}>
        <OptionHeader data={data} />

        <View style={{flexDirection:'row', alignItems:'center'}}>

        <TextInput
        maxLength={5}
        mode='outlined'
        value={value}
        onChangeText={onChangeText}
        placeholder={'00.00'}
        onBlur={onBlur}
        error={!!error && touch === true}
        keyboardType='number-pad'
        style={{width:120}}
        theme={{
            roundness:12
        }}
        />
        <Text>{data?.unit}</Text>
        
        </View>

        <HelperText visible={!!error && touch === true} style={{color:'red'}}>
            {error}
        </HelperText>


    </View>
  )
}

export default FeildSelector