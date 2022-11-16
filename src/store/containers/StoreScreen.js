import React from 'react';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import StoreDetails from '../components/StoreDetails';

const StoreScreen = () => {
  const {params} = useRoute();
  const {selectedStore} = params;

  const handleQuantityModification = (productId, newQuantity) => {
    // TODO Add logic to update the new quantity in the object
  };

  return (
    <View>
      <StoreDetails
        store={selectedStore}
        products={selectedStore.products}
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
