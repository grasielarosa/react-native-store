import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import ProductCard from './ProductCard';

const ProductsList = ({products, onModifyQuantity}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
        Stock
      </Text>
      {products.map(product => (
        <View style={styles.item} key={product.id}>
          <ProductCard {...product} onModifyQuantity={onModifyQuantity} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    padding: 8,
  },
  title: {
    marginBottom: 12,
  },
  item: {
    marginBottom: 16,
  },
});

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  onModifyQuantity: PropTypes.func.isRequired,
};

export default ProductsList;
