import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    detailContainer:{
      marginHorizontal:2,
      marginVertical:2,
      flexBasis: '48%',
      // border: '#778899',
      borderRadius: 16,
      backgroundColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    detailText: {
      fontSize: 14,
    },
    menuHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'column',
      alignItems:"center", 
      justifyContent: 'space-between',
    },
    menuContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    menuFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
    },
    menuImage:{
      height: 80,
      width: 80,
      alignSelf:'center',
    },
    title:{
      fontSize:16,
      color:"#000000",
      fontWeight:'bold',
      justifyContent: 'space-evenly',
      paddingHorizontal: 10,
      paddingTop: 7,
      textAlign: 'center',
    },
    subTitle:{
      fontSize:14,
      color:"#C0C0C0",
      textAlign: 'center',
    },
    numberTitle:{
      fontSize:14,
      flex:1,
      color:"#000000",
      fontWeight:'bold',
      textAlign: 'center'
    },
  });