import { View, Text, SectionList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Button } from 'react-native-paper'
import { useAuth } from '../../contexts/AuthContextProvider'




const MySectionList = ({userId}) => {
  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const {logout, deleteAccount} = useAuth()

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
                    danger: true,
                    onPress:()=> {
                      setModalType('logout')
                      setOpen(true)
                    }
                 
                },
                {
                    label: 'Delete Account',
                    danger:true,
                    onPress:()=>{
                      setModalType('delete')
                      setOpen(true)
                    }
                  
                },

            ]
        },
]


  

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


              <Modal transparent backdropColor={1} visible={open} animationType='fade'>
                <View style={{alignSelf:'center', backgroundColor:'white', marginVertical:'auto', height:200, width:240, borderRadius:12 , justifyContent:'space-between'}}>
                  {
                    modalType === 'logout' ? (
                      <Text>From logout</Text>
                    ): (
                      <Text>From Delete</Text>
                    )
                  }

                  <Button onPress={()=> setOpen(false)} mode='outlined' style={{width:'100%', height:50}} contentStyle={{height:50, width:'100%'}} >
                    Cancel
                  </Button>
                  <Button onPress={modalType === 'logout' ? logout : deleteAccount} mode='contained' style={{width:'100%', height:50}} contentStyle={{height:50, width:'100%'}} >
                    {modalType === 'logout' ? 'Logout' : 'Delted'}
                  </Button>

                </View>
              </Modal>
        
        
              
    </View>
  )
}

export default MySectionList