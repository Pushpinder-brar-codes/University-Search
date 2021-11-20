/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Pressable} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {TouchableHighlight} from 'react-native';
import {TouchableHighlightComponent} from 'react-native';
import {ActivityIndicator} from 'react-native';

const List = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  const changeScreen = item => {
    navigation.navigate('Details', {
      item,
    });
  };

  useEffect(() => {
    const getData = () => {
      const res = fetch('http://universities.hipolabs.com/search?country=India')
        .then(data => data.json())
        .then(data => setData(data));
    };

    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      {data ? (
        <FlatList
          style={{marginTop: 5}}
          data={data}
          maxToRenderPerBatch={50}
          renderItem={({item}, i) => {
            return (
              <ListItem
                Component={TouchableHighlightComponent}
                onPress={() => {
                  changeScreen(item);
                }}
                style={{margin: 5, marginHorizontal: 10}}
                key={i}
                bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'black'}}>
                    {item.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {item['state-province'] ? item['state-province'] : 'India'}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                  name="chevron-right"
                  type="MaterialIcons"
                  size={18}
                  color="#1f9333"
                />
              </ListItem>
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={40} />
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
