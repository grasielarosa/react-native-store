import React from 'react';
import PropTypes from 'prop-types';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Surface, List} from 'react-native-paper';
import ProductsList from './ProductsList';

const StoreDetails = ({store, products, onModifyQuantity}) => {
  const {name, address, cover, phone} = store;
  return (
    <ScrollView>
      <Image source={cover} style={styles.image} />
      <Surface style={styles.detailsCard}>
        <List.Item
          left={props => <List.Icon {...props} icon={'map-marker'} />}
          title={address}
          description={name}
        />
        <List.Item
          left={props => <List.Icon {...props} icon={'phone'} />}
          title={phone}
        />
      </Surface>
      <ProductsList products={products} onModifyQuantity={onModifyQuantity} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  detailsCard: {
    padding: 8,
  },
  stockTitle: {
    padding: 8,
  },
});

StoreDetails.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    cover: PropTypes.number,
    phone: PropTypes.string,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  onModifyQuantity: PropTypes.func.isRequired,
};

export default StoreDetails;
