import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useCard } from '../../src/hooks/useCard'
import CardScreenTopBar from '../../src/components/Main/ContentFav/CardScreenTopbar'

const CardScreen = () => {
    const {cardId} = useLocalSearchParams()
    const {data, error} = useCard(cardId)




  return (
    <SafeAreaView style={{flex:1}}>

     < CardScreenTopBar cardData={data} />

        


        <View style={{flex:1}}>
            <Text>
                {data?.description}
            </Text>
        </View>
        



    </SafeAreaView>
  )
}

export default CardScreen