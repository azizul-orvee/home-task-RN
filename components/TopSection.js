import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BorderSVG from './SVG/BorderSVG';
import CalenderSVG from './SVG/CalenderSVG';
import LocationSVG from './SVG/LocationSVG';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { dropDownData } from '../Data/DropdownData';

const TopSection = () => {
  const [location, setLocation] = useState('');

  const renderDropdownItem = ({ item }) => {
    return (
      <View style={renderDropdownItemStyles.one}>
        <View style={{ marginRight: 10 }}>{item?.logo}</View>
        <Text style={{ marginLeft: 10 }}>{item?.name}</Text>
        <View style={{ marginLeft: 10 }}>{item?.icon}</View>
      </View>
    );
  };

  return (
    <View>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <View style={styles.inputBox}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LocationSVG size={25} fill={'#fff'} />
            <View style={{ marginLeft: 10 }}>
              <Text>Gamle Oslo</Text>
              <TextInput
                placeholder='No'
                onChangeText={(text) => setLocation(text)}
                defaultValue={location}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BorderSVG size={20} fill={'#fff'} />
            <CalenderSVG size={20} fill={'#fff'} />
            <Text style={{ marginLeft: 10, marginRight: 10 }}>When?</Text>
          </View>
        </View>
      </View>
      {/* Dropdown */}
      <View>
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
          <Carousel
            layout={'default'}
            data={dropDownData}
            sliderWidth={100}
            itemWidth={150}
            renderItem={renderDropdownItem}
            inactiveSlideScale={1}
          />
        </View>
      </View>
      <Text style={{padding: 10, color:'gray', fontSize:15}}>100 results of 4,55</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 8,
    marginTop: 40,
    padding: 5,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    width: '100%',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const renderDropdownItemStyles = StyleSheet.create({
  one: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    height: 60,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
export default TopSection;
