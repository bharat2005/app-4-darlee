import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const InputCard = ({title= 'Title', value, onChangeText}) => {
  const [text, setText] = useState(value)

  return (
    <View style={{width:Dimensions.get('screen').width, padding:18, height:240}}>

        <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'white', padding:12, justifyContent:'space-between'}}>

        <Text style={{fontSize:24, fontWeight:'500'}}>
            {title}
        </Text>


<View >
<TextInput maxLength={10} onChangeText={(v)=> {setText(v); onChangeText(v)}} value={text} 
  right={ text.length > 0 && <TextInput.Icon icon={'close'}  onPress={()=> setText('')} forceTextInputFocus={false}/>}
  />

      <Text>
        {text.length} / 10
      </Text>

</View>

            

        </View>
    
    </View>
  )
}

export default InputCard