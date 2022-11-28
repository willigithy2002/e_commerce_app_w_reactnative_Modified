import React, {useEffect, useState} from "react";
import {View, Text, FlatList , Animated ,StyleSheet} from "react-native";
import { getProducts } from "../services/ProductsService";
import {Product} from "../components/Product";

// Direncanakan untuk melakukan animated FlatList, tapi Tidak bisa karena posisi y nya tidak tau dimana.
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export function ProductsList({navigation}){

    function renderProduct({item: product}){
        return(
            <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {productId: product.id})
                }}
            />
        )
    }

    const [products , setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: {contentOffset: { y } } } ], {
        useNativeDriver: true,
        });

    return(
        <AnimatedFlatList 
            scrollEventThrottle={16}
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct} 
            {...{onScroll}}
        />
    )
}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });
  