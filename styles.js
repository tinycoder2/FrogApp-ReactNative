import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#6699ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#267326"
    },
    inputView:{
      width:"80%",
      backgroundColor:"#ffffff",
      borderRadius:25,
      borderStyle:"dotted",
      borderColor:"#267326",
      borderWidth:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black"
    },
  
    loginBtn:{
      width:"60%",
      backgroundColor:"#ffaa00",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      fontWeight:"bold",
      color:"white"
    }
  })
  
  export default styles;