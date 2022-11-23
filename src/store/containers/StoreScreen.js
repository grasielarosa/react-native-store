import React from 'react';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import StoreDetails from '../components/StoreDetails';
import {useStoresDispatch, useStores} from '../../StoresContext';

const StoreScreen = () => {
  const {params} = useRoute();
  const {selectedStore} = params;
  const dispatch = useStoresDispatch();
  const stores = useStores();

  const storeToShow = stores.find(store => store.id === selectedStore.id);

  const handleQuantityModification = (productId, newQuantity) => {
    const updateProducts = storeToShow.products.map(product => {
      let newProduct = {...product};

      if (product.id === productId) {
        newProduct.quantity = newQuantity;
      }
      return newProduct;
    });

    const updateQuantity = {
      ...storeToShow,
      products: updateProducts,
    };

    dispatch({
      type: 'update',
      store: updateQuantity,
    });
  };

  return (
    <View>
      <StoreDetails
        store={storeToShow}
        products={storeToShow.products}
        onModifyQuantity={handleQuantityModification}
      />
    </View>
  );
};

StoreScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      selectedStore: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        address: PropTypes.string,
        cover: PropTypes.number,
      }),
    }),
  }),
};

export default StoreScreen;
