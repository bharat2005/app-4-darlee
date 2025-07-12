import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../src/contexts/AuthContextProvider";
import { Button, withTheme } from "react-native-paper";
import { db } from "../../src/services/firebase/firebaseConfig";
import { doc, getDoc } from "@react-native-firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import TabScreenTopBar from "../../src/components/Shared/TabScreenTopBar";
import { TouchableOpacity } from "react-native";
import Petals from "../../assets/svgs/Petals";
import LottieView from "lottie-react-native";
import MyChartView from "../../src/components/Main/Home/MyCharView";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import MyWeekList from "../../src/components/Main/Home/MyWeekList";
import MyRecord from "../../src/components/Main/Home/MyRecord";
import MyBottomSheet from "../../src/components/Shared/MyBottomSheet";
import { homeSheetStore } from '../../src/stores/homeSheetStore'
import { router } from "expo-router";

const TOTAL_ANGLE = 80;
const ITEM_ANGLE = TOTAL_ANGLE / 6;
const INITIAL_ANGLE = -TOTAL_ANGLE / 2;

const Home = () => {
    const sheetRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selected, setSelected] = useState(0);
  const rotateValue = useSharedValue(-60);
  const popDownValue = useSharedValue(0);
  const isOpen = homeSheetStore((state)=> state.isOpen )
  const closeSheet = homeSheetStore(state => state.closeSheet)
  const homeSheetDate = homeSheetStore(state => state.homeSheetDate)





  useEffect(()=> {
  if(isOpen && sheetRef.current ){
    sheetRef.current.present()
  }
  if (!isOpen && sheetRef.current){
    sheetRef.current.dismiss()
  }

  },[isOpen])




  const handlePress = (index) => {
    setSelected(index);
    popDownValue.value = withTiming(80, { duration: 400 }, () => {
      const angle = INITIAL_ANGLE + index * ITEM_ANGLE;
      rotateValue.value = withTiming(angle, { duration: 50 });
      popDownValue.value = withTiming(0, { duration: 400 });
    });
  }

 

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotateValue.value}deg` },
        { translateY: popDownValue.value },
      ],
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }} edges={["top"]}>
      <TabScreenTopBar title="Home" />



      <View style={{ flex: 1, paddingTop:24 }}>
 
        <MyChartView isFuture={new Date() <= new Date(selectedDate)} selectedDate={selectedDate}    /> 

        <MyWeekList
          selected={selected}
          handlePress={handlePress}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        /> 

        <View style={{ flex: 1, width: "100%" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Animated.View
                style={[
                  {
                    height: 320,
                    width: 1,
                    backgroundColor: "white",
                    position: "absolute",
                    top: -4,
                  },
                  rotateStyle,
                ]}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -24,
                    zIndex: -1,
                  }}
                >
                  <Petals height={50} width={50} />
                </View>
              </Animated.View>
            </View>
          </View>

          <View
            style={{
              height: "95%",
              width: "70%",
              backgroundColor: "white",
              marginHorizontal: "auto",
              marginTop: "auto",
              borderTopRightRadius: 140,
              borderTopLeftRadius: 140,
            }}
          >
            <View
              style={{
                height: 270,
                width: 270,
                backgroundColor: "pink",
                borderRadius: "50%",
                marginHorizontal: "auto",
                marginTop: 8,
              }}
            >

            <TouchableOpacity onPress={()=>router.push('/periodCalenderScreen')} style={{height:50, width:'100%', alignSelf:'center', backgroundColor:'black'}}>
              <Text>Period</Text>
            </TouchableOpacity>

            </View>


     <MyRecord isFuture={new Date() <= new Date(selectedDate)} selectedDate={selectedDate} />
          </View>
        </View>
        
      </View>

           <MyBottomSheet  sheetRef={sheetRef} closeSheet={()=> closeSheet()} /> 
    </SafeAreaView>
  );
};

export default Home;
