import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import ContactListStyle from './ContactListStyle'

export default function ContactList() {
    const contacts =[
        {
            uid: 1,
            name:'Ritik',
            status:'Just an extraordinary student',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',

        },
        {
            uid: 2,
            name:'Anurag',
            status:'I love code and tech',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',

        },
        {
            uid: 3,
            name:'Sanket',
            status:'Making your gpay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',

        },
        {
            uid: 4,
            name:'Anirudh',
            status:'Building secure digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',

        },
    ];
  return (
    <View>
      <Text style={ContactListStyle.headingText}>ContactList</Text>
      <ScrollView
      style={ContactListStyle.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={ContactListStyle.userCard}>
                <Image 
                source={{
                    uri:imageUrl
                }}
                style={ContactListStyle.userImage}
                />
                <View>
                <Text style={ContactListStyle.userName}>{name}</Text>
                <Text style={ContactListStyle.userStatus}>{status}</Text>
                </View>
            </View>
            
        ))}
      </ScrollView>
    </View>
  )
}