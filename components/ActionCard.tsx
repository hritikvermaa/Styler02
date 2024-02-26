import { View, Text, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ActionCardStyle from './ActionCardStyle'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
       Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={ActionCardStyle.headingText}>Blog Card</Text>
      <View style={[ActionCardStyle.card,ActionCardStyle.elevatedCard]}>
         <View style={ActionCardStyle.headingContainer}>
         <Text style={ActionCardStyle.headerText}>
            what's new in javascript21-ES12
         </Text>
         </View>
         <Image
         source={{
            uri:'https://picsum.photos/500/500'
         }}
         style={ActionCardStyle.cardImage}
         />
         <View style={ActionCardStyle.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo facilis, nesciunt sunt distinctio ipsa eum quaerat, excepturi et reprehenderit iste aperiam at deserunt mollitia, necessitatibus facere voluptatem tenetur sapiente.
            Enim in obcaecati quod minus atque, deserunt nulla! Illum quibusdam magnam beatae sequi ipsum et fugit, odio possimus architecto suscipit aliquam esse nam quod quas consectetur autem aliquid tenetur ipsa.
            Amet optio, maxime corporis quod, consequuntur ab repellendus illum esse eveniet unde placeat totam velit assumenda minima aut consequatur quisquam id dicta soluta eius exercitationem sed. Aspernatur officia qui culpa!
          </Text>
         </View>
         <View style={ActionCardStyle.footerContainer}>
           <TouchableOpacity
           onPress={() => openWebsite('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/')}
           >
            
            <Text style={ActionCardStyle.socialLinks}>Read more</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => openWebsite('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/')}
           >
            
            <Text style={ActionCardStyle.socialLinks}>Follow me</Text>
           </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}