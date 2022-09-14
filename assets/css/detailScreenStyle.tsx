import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      padding:10,
      flexWrap:'wrap',
      flexDirection: 'row'
    },
    title: {
      fontSize: 16,
      color: "#000000",
      fontWeight: 'bold',
      justifyContent: 'space-evenly',
      paddingHorizontal: 10,
      paddingTop: 7,
      textAlign: 'center',
    },
    detailContainer:{
      marginTop:10,
      paddingHorizontal: 10,
    },
    menuHeader: {
      alignItems:"flex-start", 
      paddingLeft: 10
    },
    menuContent: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    menuFooter:{
      padding:10,
      borderRadius:40,
      marginHorizontal:3,
      backgroundColor: "transparent",
      marginTop:5,
    },
    menuImage:{
      height: 45,
      width: 45,
      alignSelf:'center',
    },
    subTitle:{
      fontSize: 11,
      color:"#C0C0C0",
      textAlign: 'center',
    },
    scrollViewStyle:{
      flexGrow: 1
    }
});