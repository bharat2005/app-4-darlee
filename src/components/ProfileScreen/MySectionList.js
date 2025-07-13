import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


const sectionListData =  [
        {
            title:'Account',
            data: [
                {
                    label: 'Proifle',
                    onPress:()=>router.push('/profileDetail')
                },
                {
                    label: 'UserId',
                    info:true
                },

            ]
        },
        {
            title:'App Stores',
            data: [
                {
                    label: 'Terms',
                    onPress:()=>router.push({pathname:'/TPScreen', params:{id: 'terms'}})
                },
                {
                    label: 'Privacy Procily',
                   onPress:()=>router.push({pathname:'/TPScreen', params:{id: 'privacy'}})
                },

            ]
        },
                {
            title:'Login',
            data: [
                {
                    label: 'Logout',
                    danger: true
                 
                },
                {
                    label: 'Delete Account',
                    danger:true
                  
                },

            ]
        },
]

const MySectionList = ({userId}) => {



  

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={item?.onPress || null} style={{width:'100%', height:40, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={{color:item?.danger ? 'red' : 'black'}}>{item?.label}</Text>
      {item?.info && (
        <Text>{userId?.slice(0,12)}</Text>
      )}
    </TouchableOpacity>
  )


  const renderSectionHeader = ({section:{title}}) =>(
    <View style={{height:50, width:'100%', flexDirection:'row', alignItems:'center', }}>
      <Text style={{fontSize:18, fontWeight:'800'}}>{title}</Text>
    </View>
  )




  return (
    <View style={{flex:1, width:'100%', padding:8}}>

              <SectionList
              renderSectionFooter={()=> <View style={{height:2, backgroundColor:'lightgray', width:'100%'}} />}
              sections={sectionListData}
              renderSectionHeader={renderSectionHeader}
              keyExtractor={(item, index)=> index.toString()}
              renderItem={renderItem}
        
              />
        
        
              
    </View>
  )
}

export default MySectionList