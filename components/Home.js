/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import List from './List';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default Home;
