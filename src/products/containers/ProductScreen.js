import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ProductDetails} from '../components/ProductDetails';
import {useStores} from '../../StoresContext';

const ProductScreen = () => {
  const {params} = useRoute();
  const {selectedProduct, selectedStore} = params;
  const stores = useStores();

  const findStore = stores.find(store => store.id === selectedStore);
  const productToShow = findStore.products.find(
    product => product.id === selectedProduct.id,
  );

  return (
    <View>
      <ProductDetails product={productToShow} />
    </View>
  );
};

export {ProductScreen};

const styles = StyleSheet.create({});
