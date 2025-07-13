import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { router } from 'expo-router';
import MySectionList from './MySectionList';

const ProfileScreenHeader = ({data}) => {
  


  return (
    <View style={{height:55, width:Dimensions.get('screen').width, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

            
        <Text style={{textAlign:'center'}}>{data?.name}</Text>

        <TouchableOpacity onPress={()=> router.back()} style={{position:'absolute', left:0, marginHorizontal:12}}> 
            <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>


    </View>
  )
}

export default ProfileScreenHeader