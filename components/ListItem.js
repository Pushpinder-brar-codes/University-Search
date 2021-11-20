/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';

const ListItem = ({link, name}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/id/237/536/354'}}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    marginRight: 20,
  },
  container: {
    padding: 10,
  },
  text: {
    color: 'black',
  },
});
