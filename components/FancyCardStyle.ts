import { StyleSheet } from "react-native";

const FancyCardStyle = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    card:{
      width:350,
      height:360,
      borderRadius:8,
      marginVertical: 12,
      marginHorizontal:4,
    },
    cardElevated:{
        backgroundColor:'#fff',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
        },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
       color:'#000',
       fontSize:22,
       fontWeight:'bold',
       marginBottom:6
    },
    cardLabel:{
        color:'#000',
        fontSize:18,
        marginLeft:3,
        marginBottom:6
    },
    cardDescription:{
        color:'#000',
        fontSize:12,
        marginBottom:6,
        marginLeft:12
    },
    cardFooter:{
        color:'#000',
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
})

export default FancyCardStyle