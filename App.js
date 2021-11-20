/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={'light-content'} />
          <Stack.Navigator>
            <Stack.Screen
              name="University Search"
              component={Home}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#ffffff'},
                headerTitleStyle: {fontSize: 24, fontWeight: '600'},
              }}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
