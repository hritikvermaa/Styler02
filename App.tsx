import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCardss from './components/FancyCardss'
import ActionCard from './components/ActionCard'


const App = () => {
  return (
   
      
        <View>
        <ScrollView>
           <FlatCards />
           <ElevatedCards/>
          <FancyCardss />
          <FancyCardss />
          <ActionCard />
        </ScrollView>
      </View> 
      
    
  )
}

export default App

