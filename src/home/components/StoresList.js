import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import StoreCard from './StoreCard';

const StoresList = ({stores, onPressView}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [storesFiltered, setStoresFiltered] = useState(stores);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query) {
      let filterValues =
        storesFiltered && storesFiltered?.length > 0
          ? storesFiltered?.filter(store =>
              store?.name.toLowerCase()?.startsWith(query?.toLowerCase()),
            )
          : [];
      setStoresFiltered([...filterValues]);
    } else {
      setStoresFiltered(stores);
    }
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView style={styles.container}>
        {storesFiltered.length > 0 &&
          storesFiltered?.map(store => (
            <View key={store.id} style={styles.item}>
              <StoreCard
                id={store.id}
                name={store.name}
                cover={store.cover}
                onPressView={onPressView}
              />
            </View>
          ))}
        {storesFiltered.length <= 0 && (
          <Text>
            <Text>store not found</Text>
          </Text>
        )}
      </ScrollView>
    </View>
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
