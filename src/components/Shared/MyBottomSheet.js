import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import MyBottomSheetViewHeader from './MyBottomSheetViewHeader';
import TabScreenTopBar from './TabScreenTopBar';
import MyBottomSheetView from './MyBottomSheetView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MyBottomSheet = ({sheetRef, selectedDate}) => {
  const insets = useSafeAreaInsets()

  return (
  <BottomSheetModal
enablePanDownToClose={true}
enableContentPanningGesture={false}
snapPoints={['96%']}
ref={sheetRef}
>
    <BottomSheetView style={{height:'100%', width:'100%', paddingBottom:insets.bottom + 20,}}>
      <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={insets.bottom + 20}>


    <MyBottomSheetView sheetRef={sheetRef} selectedDate={selectedDate}  />


      </KeyboardAvoidingView>
     </BottomSheetView>
      </BottomSheetModal>
  )
}

export default MyBottomSheet