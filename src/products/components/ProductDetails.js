import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Chip, Surface, Text} from 'react-native-paper';

const ProductDetails = ({product}) => {
  return (
    <ScrollView>
      <Surface style={styles.mainCard}>
        <Image source={product.cover} style={styles.image} />
        {product.quantity <= 0 ? (
          <Text variant="titleLarge" style={styles.defaultText}>
            out of stock
          </Text>
        ) : (
          <View style={styles.detailsCard}>
            <Text variant="titleLarge">{product.name}</Text>
            <View style={{padding: 5, flexDirection: 'row'}}>
              {product.labels.map(tag => (
                <Chip mode="outlined" compact elevated style={styles.chip}>
                  #{tag}
                </Chip>
              ))}
            </View>

            <Text variant="bodyMedium">
              Quantity available: {product.quantity}
            </Text>
          </View>
        )}
      </Surface>
    </ScrollView>
  );
};

export {ProductDetails};

const styles = StyleSheet.create({
  mainCard: {
    padding: 8,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  defaultText: {
    paddingVertical: 40,
    alignItems: 'center',
    textAlign: 'center',
    color: 'tomato',
  },

  detailsCard: {
    padding: 20,
    alignItems: 'center',
  },
  chip: {
    marginHorizontal: 5,
    marginVertical: 12,
  },
});
