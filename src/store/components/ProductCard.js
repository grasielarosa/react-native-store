import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';
import {Card, IconButton, Text} from 'react-native-paper';

const ProductCard = ({id, name, cover, quantity, onModifyQuantity}) => {
  const handleModifyQuantity = operation => {
    // TODO Implement increase or decrease of the current quantity
    onModifyQuantity(id, quantity);
  };

  return (
    <Card>
      <Card.Content>
        <View style={styles.content}>
          <Image style={styles.image} source={cover} />
          <Text style={styles.name} variant="titleMedium">
            {name}
          </Text>
          <View style={styles.modifier}>
            <IconButton
              mode="contained"
              icon={'minus'}
              onPress={() => handleModifyQuantity('subtract')}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              mode="contained"
              icon={'plus'}
              onPress={() => handleModifyQuantity('add')}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    marginRight: 16,
    borderRadius: 8,
  },
  name: {
    flex: 1,
  },
  modifier: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
  quantity: {
    marginHorizontal: 4,
    minWidth: 20,
    textAlign: 'center',
  },
});

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.number,
  quantity: PropTypes.number,
  onModifyQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
