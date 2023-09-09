import {StyleSheet, Dimensions} from 'react-native';

export default productCardstyle = StyleSheet.create({
    container: {
      flex : 10,
    },
    box : {
      backgroundColor: 'whitesmoke',
      margin: 5,
      borderRadius: 10,
      width : Dimensions.get('window').width / 2.11,
      height: Dimensions.get('window').height / 2.5,
      },
    image : {
      width : Dimensions.get('screen').width / 2.5,
      height: Dimensions.get('screen').height / 4,
      margin : 10,
      borderRadius : 10,
      alignItems : 'center',
    },
    title : {
      flex : 1,
      fontSize : 15,
      fontWeight: 'bold',
    },
    price : {
      flex : 1,
      fontSize : 20,
    },
    stock : {
      flex : 1,
      fontWeight:"bold",
      fontSize:20,
      color:"red",
      marginTop:0,
    },
  });

