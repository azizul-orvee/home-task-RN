import React from 'react';
import { View, Text } from 'react-native';
import HomeSVG from './SVG/HomeSVG';
import AccountSVG from './SVG/AccountSVG';
import HistorySVG from './SVG/HistorySVG';

const BottomSection = () => {
  return (
    <View style={{ borderTopWidth: 1, borderColor: '#E6E6E6' }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <HomeSVG size={25} fill={'#fff'} />
          <Text>Home</Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <HistorySVG size={25} fill={'#fff'} />
          <Text style={{ color: 'gray' }}>History</Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <AccountSVG size={25} fill={'#fff'} />
          <Text style={{ color: 'gray' }}>Account</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomSection;
