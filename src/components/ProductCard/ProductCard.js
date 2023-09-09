import React from "react";
import { View, Text, Image} from 'react-native';
import productCardstyle from './ProductCard.style.js';

const ProductCard = ({news}) => {
    return(
            <View style = {productCardstyle.box}>
            <Image style = {productCardstyle.image} source = {{uri:news.imgUrl}} />
            <Text style = {productCardstyle.title}> {news.title}</Text>
            <Text style = {productCardstyle.price}> {news.price}</Text>      
            <Text style = {productCardstyle.stock}> {news.inStock ? ' ' : 'STOK YOK' }</Text>    
            </View>
    );
};

export default ProductCard;