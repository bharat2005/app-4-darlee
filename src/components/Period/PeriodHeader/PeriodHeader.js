import { View, Text, Dimensions, TouchableOpacity, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import ChatModal from '../../Shared/HomeCalModal';
import { AntDesign } from '@expo/vector-icons';

const PeriodHeader = () => {
    const [visible, setVisible] = useState(false)

  return (

    <View
      style={{
        height: 40,
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Period</Text>



<TouchableOpacity onPress={()=> router.back()} style={{ justifyContent:'center', alignItems:'center', position:'absolute', left:0, marginHorizontal:18}}>
<Feather name="arrow-left" size={24} color="black" />
 </TouchableOpacity>

 
 <TouchableOpacity onPress={()=> setVisible(true)} style={{height:'75%', width:30, borderRadius:6, borderWidth:2, borderColor:'gray', justifyContent:'center', alignItems:'center', position:'absolute', right:0, marginHorizontal:18}}>

 </TouchableOpacity>


        <Modal
        visible={visible}
        backdropColor={1}
        animationType='fade'
        >
    <View style={{height:340, width:260, backgroundColor:'white', alignSelf:'center', borderRadius:12, marginVertical:'auto'}}>

        <Pressable onPress={()=> setVisible(false)} style={{position:'absolute', top:0, right:0, padding:12}}>
            <AntDesign name="close" size={20} color="black" />
        </Pressable>

        <Text style={{textAlign:'center'}}>idudhfih dffiiwjo</Text>

        <Text style={{lineHeight:30, textAlign:'center', marginTop:12}}>
            lskkmfon ofjwohjf sodjfowe osiddhfowehf wifhwoee wfhhwoh
            djfowj wofiiweihfhe foiwehf weofijwe fwiijf wifj fwpijff 
            sdfjoijf woff woeijfj wfihwoihf wifiw fwohi
        </Text>

    </View>
        </Modal>

   


    </View>


   
  )
}

export default PeriodHeader