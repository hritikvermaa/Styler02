import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCardsStyle from './FlatCardsStyle'

export default function FlatCards() {
  return (
    <View>
      <Text style={FlatCardsStyle.headingText}>Flat Cards</Text>
      <View style={FlatCardsStyle.container}>
        <View style={[FlatCardsStyle.card,FlatCardsStyle.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[FlatCardsStyle.card,FlatCardsStyle.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[FlatCardsStyle.card,FlatCardsStyle.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[FlatCardsStyle.card,FlatCardsStyle.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

