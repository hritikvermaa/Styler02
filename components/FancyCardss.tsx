import { View, Text, Image } from 'react-native'
import React from 'react'
import FancyCardStyle from './FancyCardStyle'
const logoImg=require("../Asset/about.jpg");


export default function FancyCardss() {
  return (
    <View>
      <Text style={FancyCardStyle.headingText}>Trending Places</Text>
      <View style={[FancyCardStyle.card,FancyCardStyle.cardElevated]}>
       <Image 
       source={{
        uri:
        'https://picsum.photos/400'
       }}
       style={FancyCardStyle.cardImage}
       />
       <View style={FancyCardStyle.cardBody}>
        <Text style={FancyCardStyle.cardTitle}>  Hawa Mahal </Text>
        <Text style={FancyCardStyle.cardLabel}>  Pink city,jaipur </Text>
        <Text style={FancyCardStyle.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora quisquam nesciunt atque optio voluptatibus maiores, a, officia eos, ad autem nisi fugit? Harum, ratione aliquam provident laudantium id amet!
        Enim pariatur quam unde officiis tenetur animi officia repellendus eius praesentium aut. Illum ea quaerat similique dolor nulla asperiores eum totam perferendis commodi, esse quas facilis itaque fugit culpa id. </Text>
        <Text style={FancyCardStyle.cardFooter}>  12 mins away </Text>
          
       </View>
      </View>
    </View>
  )
}