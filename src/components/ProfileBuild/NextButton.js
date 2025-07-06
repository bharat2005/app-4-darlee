import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const NextButton = ({setCurrentIndex, handleNextPress, isCurrentStepValid, values}) => {
  return (
     <View
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 0,
                    right: 0,
                    paddingVertical: 4,
                    paddingHorizontal: 12,
                    height: 60,
                  }}
                >
                  <Button
                    mode="contained"
                    disabled={!isCurrentStepValid(values)}
                    onPress={() => {
                      handleNextPress();
                      setCurrentIndex(prev => prev + 1)
                    }}
                    style={{ height: "100%", width: "100%" }}
                    contentStyle={{ height: "100%", width: "100%" }}
                  >
                    Next
                  </Button>
                </View>
  )
}

export default NextButton