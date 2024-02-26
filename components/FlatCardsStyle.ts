import { StyleSheet } from "react-native";

const FlatCardsStyle = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding: 8,
    },
    card:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      borderRadius:4,
      margin:8
    },
    cardOne:{
       backgroundColor:'#EF5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB4',
     },
     cardThree:{
        backgroundColor:'#5DA3FA',
     },
})

export default FlatCardsStyle