import { StyleSheet } from "react-native";

const ContactListStyle=StyleSheet.create({
     headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
     },
     container:{
        paddingHorizontal:16,
        marginBottom:4,

     },
     userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10

     },
     userImage:{
        width:60,
        height:60,
        borderRadius: 60/2,
        marginRight:14,
     },
     userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',

     },
     userStatus:{
        fontSize:12,
     },
})

export default ContactListStyle