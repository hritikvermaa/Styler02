import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ElevatedCardsStyle from './ElevatedCardsStyle'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={ElevatedCardsStyle.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={ElevatedCardsStyle.container}>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[ElevatedCardsStyle.card,ElevatedCardsStyle.cardElevated]}>
            <Text>:)</Text>
        </View>
      </ScrollView>
    </View>
  )
}