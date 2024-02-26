import { StyleSheet } from "react-native";

const ElevatedCardsStyle = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
          width:1,
          height:1
        },
        shadowColor:'#EF5354',
        shadowOpacity:0.4,
        shadowRadius:2,
    },
})

export default ElevatedCardsStyle
