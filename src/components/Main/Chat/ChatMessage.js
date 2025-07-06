import { View, Text } from 'react-native'
import React from 'react'
import { format } from 'date-fns'
import MessageLike from './MessageLike'

const ChatMessage = ({item, index}) => {
    if(item?.type === 'date'){
      return (
        <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
          <Text style={{backgroundColor:'black', paddingHorizontal:8, paddingVertical:2, color:'white', borderRadius:8}}>
            {item?.label}
            </Text>
        </View>
      )
    } 



      return (   

        <View style={{paddingHorizontal:4, paddingVertical:12}}>
           <View style={{ flexDirection: item?.role === 'user' ? 'row-reverse' : 'row'}}>
  
        <View style={{backgroundColor:'white', minHeight:55, minWidth:50, maxWidth:340, justifyContent:'center', alignItems:'center', borderRadius:12, paddingHorizontal:12, paddingVertical:12}}>
          <Text>
            {item?.text}
          </Text>
        </View>
  
        <View style={{height:'100%', width:'10%', flexDirection:'column-reverse', padding:2}}>
        
     
          <Text style={{fontSize:12}}>
            { item?.createdAt?.toDate() ? format(item?.createdAt?.toDate(), 'hh:mm'): format(new Date(), 'hh:mm')}
          </Text>
      
        </View>
  
        
  
      </View>


        {item?.role !=='user' && (
          <MessageLike id={item?.id} />
        )}
        </View>
     

      )
    

   
}

export default ChatMessage