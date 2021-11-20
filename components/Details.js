/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useState} from 'react';

const Details = () => {
  const route = useRoute();
  const item = route.params.item;

  return (
    <View style={{padding: 10, backgroundColor: '#f2f2f2', flex: 1}}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#ffffff',

          borderRadius: 10,
          shadowColor: '#000',
          flex: 1,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 32,
            marginBottom: 0,
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text
            style={{
              color: '#212121',
              marginTop: 10,
              fontSize: 20,
            }}>
            City:{' '}
          </Text>
          <Text
            style={{
              color: '#212121',
              marginTop: 10,
              fontSize: 20,
            }}>
            {item['state-province'] ? item['state-province'] : 'unknown'}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Domains
        </Text>
        <FlatList
          data={item.domains}
          style={{flexGrow: 0}}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="circle"
                type="MaterialIcons"
                size={14}
                color="#186825"
                style={{marginRight: 8}}
              />
              <Text style={{color: 'black'}}>{item}</Text>
            </View>
          )}
        />
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Websites
        </Text>
        <FlatList
          data={item.web_pages}
          style={{flexGrow: 0}}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="circle"
                type="MaterialIcons"
                size={14}
                color="#186825"
                style={{marginRight: 8}}
              />
              <Text style={{color: 'black'}}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
