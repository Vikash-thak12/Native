import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Properies = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text> Properies : {id} </Text>
    </View>
  )
}

export default Properies