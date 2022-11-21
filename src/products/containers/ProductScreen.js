import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ProductDetails} from '../components/ProductDetails';

const ProductScreen = () => {
  const {params} = useRoute();
  const {selectedProduct} = params;
  return (
    <View>
      <ProductDetails product={selectedProduct} />
    </View>
  );
};

export {ProductScreen};

const styles = StyleSheet.create({});
