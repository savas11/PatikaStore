import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ProductCard from './components/ProductCard';


import product from './product.json';
import ProductCardStyle from './components/ProductCard/ProductCard.style';

function App(){
 return(
  <SafeAreaView>
    <View > 
    <Text style = {{fontSize: 28, color : 'purple',fontWeight : 'bold'}} > PATIKASTORE </Text>
    </View>
    <View style = {searchbox.container}> 
      <Text style = {searchbox.text}>  Ara...</Text>
    </View>
    <ScrollView>
      <View style = {productList.container}> 
      {product.map((item, index) => (
        <ProductCard key={index} news={item} />
        ))}
        </View>
    </ScrollView>
  
  </SafeAreaView>
 );
};

const searchbox = StyleSheet.create({
    container: {
      backgroundColor : 'whitesmoke',
      padding : 5,
      margin : 5,
      borderRadius : 10 ,
      
    },
    text : {
      marginTop : 10,
      marginBottom : 10,
      color : 'grey',
      fontSize: 15,
    },
});

const productList = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});


export default App;
