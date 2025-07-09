import { View, Text, Image } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { geminiMoodPrediction } from '../../../services/gemini/geminiMoodPrediction'
import { useMoodPrediction } from '../../../hooks/useMoodPrediction'
import { ActivityIndicator } from 'react-native-paper'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getWeekKey } from '../../../utils/getWeekKey'


const MyPredictionView = ({selectedDate}) => {
     const weekKey = getWeekKey(selectedDate)
    const {data, isLoading} = useMoodPrediction(selectedDate, weekKey)
    const queryClient = useQueryClient()


    

    useEffect(()=> {
     geminiFuntioon()

    },[data, isLoading])



    
        const geminiFuntioon = async() => {
            if(isLoading  || data) return
         
            const res = await geminiMoodPrediction(selectedDate, weekKey)
            if (res.success) {
                queryClient.invalidateQueries(['moodPrediction', weekKey])
            }
       
    }








       const renderItem = ({item, index}) => (
            <View style={{width:40}}>
                <Image style={{height:40, width:'100%', backgroundColor:'pink'}}/>
                <Text numberOfLines={1}>{item}</Text>
    
            </View>
        )
    

  return (
    <View style={{flex:1, width:'100%', backgroundColor:'tomato'}}>
        
            <View style={{ padding:12, flexWrap:'wrap', justifyContent:'center', flexDirection:'row',gap:3, alignItems:'center'}}>


        
        

        
        {
            data ? (
<>

                {
                    [...data].map((item, index)=> (
                        <React.Fragment  key={index}>
                        {
                            renderItem({item, index})
                        }
                    </React.Fragment>
                    ))
                }
        


</>



            ) : (
               <ActivityIndicator size={'large'} color='white' />
            )
        }
        

        
        
        
        
        
            
            </View>
     
    </View>
  )
}

export default MyPredictionView