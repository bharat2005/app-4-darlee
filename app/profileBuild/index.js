import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { Formik } from "formik";
import Name from "../../src/components/ProfileBuild/Steps/Name";
import DOB from "../../src/components/ProfileBuild/Steps/DOB";
import Period from "../../src/components/ProfileBuild/Steps/Period";
import Symptom from "../../src/components/ProfileBuild/Steps/Symptom";
import Interest from "../../src/components/ProfileBuild/Steps/Interest";
import Carousel from "react-native-reanimated-carousel";
import Concious from "../../src/components/ProfileBuild/Steps/Concious";
import Control from "../../src/components/ProfileBuild/Steps/Control";
import End from "../../src/components/ProfileBuild/Steps/End";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { useAuth } from "../../src/contexts/AuthContextProvider";
import TopDots from "../../src/components/ProfileBuild/TopDots";
import NextButton from "../../src/components/ProfileBuild/NextButton";


const width = Dimensions.get("screen").width;

const steps = [Name, DOB, Period, Symptom, Interest, Concious, Control, End];

const ProfielBuild = () => {
  const { userProfileBuild } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const faltListRef = useRef(null)

  const handleNextPress = () => {
    if(faltListRef.current){
      faltListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animation:true,
        viewPositon: 0.5
      })
    }
  };

  const handleCreateProfile = async (values) => {
    await userProfileBuild(values);
  };

  const isCurrentStepValid = (values) => {
    if (currentIndex === 0 || currentIndex === 3) {
      if (currentIndex === 0) {
        return Boolean(values?.name);
      } else if (currentIndex === 3) {
        return values.pmsSymptoms.length;
      }
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        initialValues={{
          name: "",
          dob: new Date("2005-05-25"),
          recentPeriodDate: new Date(),
          periodDaysLength: 5,
          menstrualCycleLength: 28,
          pmsSymptoms: [],
          healthInterest: null,
          healthConcious: null,
          bodyControl: null,
        }}
        onSubmit={handleCreateProfile}
      >
        {({
          handleChange,
          setFieldValue,
          handleBlur,
          errors,
          touched,
          values,
          isSubmitting,
          handleSubmit,
        }) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex:1}}>
              <TopDots currentIndex={currentIndex} dotNumber={steps.length} />


              <FlatList
              pagingEnabled
              scrollEnabled={false}
              ref={faltListRef}
              horizontal
              data={steps}
              renderItem={({ item: Step, index }) => (
                  <Step
                    width={width}
                    {...{
                      handleChange,
                      setCurrentIndex,
                      setFieldValue,
                      handleBlur,
                      errors,
                      touched,
                      values,
                      handleNextPress,
                      handleSubmit,
                      isSubmitting,
                    }}
                  />
                )}
              />

              {currentIndex <= 3 && (
            <NextButton {...{setCurrentIndex, handleNextPress, isCurrentStepValid, values}} />
              )}
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ProfielBuild;
