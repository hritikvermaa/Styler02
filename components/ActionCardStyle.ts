import { StyleSheet } from "react-native";

const ActionCardStyle =StyleSheet.create({
     headingText:{
       fontSize:28,
       fontWeight:'bold',
       paddingHorizontal:8
     },
     card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:4,
     },
     elevatedCard:{
      backgroundColor:'#E07C24',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
     },
     headingContainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
     },
     headerText:{
      color:'#000',
      fontSize:22,
      fontWeight:'600',
     },
     cardImage:{
        height:200,
     },
     bodyContainer:{
         padding:10,
     },
     footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
     
     },
     socialLinks:{
      fontSize:16,
      color:'#000',
      backgroundColor:'#fff',
      paddingHorizontal:20,
      paddingVertical:4,
      borderRadius:6,
      paddingTop:1.
     },
})

export default ActionCardStyle