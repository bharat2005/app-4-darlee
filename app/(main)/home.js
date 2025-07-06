import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { Button, withTheme } from 'react-native-paper'
import { db } from '../../src/services/firebase/firebaseConfig'
import { doc, getDoc } from '@react-native-firebase/firestore'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabScreenTopBar from '../../src/components/Shared/TabScreenTopBar'
import { TouchableOpacity } from 'react-native'
import Petals from '../../assets/svgs/Petals'
import LottieView, {} from 'lottie-react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import MyWeekList from '../../src/components/Main/Home/MyWeekList'


const array = [...Array(7)]
const TOTAL_ANGLE = 120
const ITEM_ANGLE = TOTAL_ANGLE / 6


const Home = () => {
  const [selected , setSelected] = useState(0)
  const rotateValue = useSharedValue(-60)
  const popDownValue = useSharedValue(0)




  const handlePress = (index) => {
    setSelected(index)
    popDownValue.value = withTiming(50, {duration:200}, (e)=> {

    const angle = -60 + index * ITEM_ANGLE
    rotateValue.value = withTiming(angle, {duration:400})

    })


  }

  const rotateStyle = useAnimatedStyle(()=> {
    return {
      transform:[{rotate: `${rotateValue.value}deg`},
                 
              ]
    }
  })






  





  return (
    <SafeAreaView style={{flex:1, backgroundColor:'pink'}} edges={['top']}>
      <TabScreenTopBar title='Home' />


      <View style={{flex:1, paddingTop:120}}>



          <MyWeekList selected={selected} handlePress={handlePress}  />



        


        <View style={{flex:1, width:'100%'}}>
        

        <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>


          <View>

            
        <Animated.View  style={[{height:240, width:1, backgroundColor:'white', position:'absolute', top:32}, rotateStyle]} >
          <View style={{position:'absolute', top:-40, right:-24,zIndex:-1 }}>
               <Petals height={50} width={50}/>
          </View>
        </Animated.View> 

          </View>


        </View>
          

 
          <View style={{height:"90%", width:'70%', backgroundColor:'white', marginHorizontal:'auto', marginTop:'auto', borderTopRightRadius:140, borderTopLeftRadius:140}}>

            <View style={{height:270, width:270, backgroundColor:'pink', borderRadius:'50%', marginHorizontal:'auto', marginTop:8}}>

            </View>
          </View> 



        </View>




  

     </View>
      

    </SafeAreaView>
  )
}

export default Home