import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useStores} from '../../StoresContext';
import StoresList from '../components/StoresList';

const HomeScreen = () => {
  const stores = useStores();
  const navigation = useNavigation();

  const handleStoreView = storeId => {
    navigation.navigate('Store', {
      selectedStore: stores.find(({id}) => id === storeId),
    });
  };

  return (
    <View style={styles.container}>
      <StoresList stores={stores} onPressView={handleStoreView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

HomeScreen.propTypes = {};

export default HomeScreen;
