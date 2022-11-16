import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {adaptNavigationTheme} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

import HomeScreen from './src/home/containers/HomeScreen';
import StoreScreen from './src/store/containers/StoreScreen';
import {StoresProvider} from './src/StoresContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = makeStyles(isDarkMode);

  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    light: NavigationDefaultTheme,
    dark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
      background: '#353535',
    },
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? CombinedDarkTheme.colors.card
      : CombinedDefaultTheme.colors.card,
  };

  return (
    <PaperProvider
      theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <StoresProvider>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer
            theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Store"
                component={StoreScreen}
                options={({route}) => ({
                  title: route.params.selectedStore.name,
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </StoresProvider>
    </PaperProvider>
  );
};

const makeStyles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default App;
