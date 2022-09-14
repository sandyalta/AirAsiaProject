import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        //paddingHorizontal: 5,
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 16,
        overflow: 'hidden',
    },
    listContainer:{
        alignItems:'center'
    },
});