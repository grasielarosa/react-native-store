import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View} from 'react-native';
import StoreCard from './StoreCard';

const StoresList = ({stores, onPressView}) => {
  return (
    <ScrollView style={styles.container}>
      {stores?.map(store => (
        <View key={store.id} style={styles.item}>
          <StoreCard
            id={store.id}
            name={store.name}
            cover={store.cover}
            onPressView={onPressView}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 36,
  },
  item: {
    marginBottom: 16,
  },
});

StoresList.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      cover: PropTypes.number,
    }),
  ),
  onPressView: PropTypes.func,
};

export default StoresList;
