import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import imageOne from '../assets/cardImage/one.png';
import imageTwo from '../assets/cardImage/two.png';
import LocationSVG from './SVG/LocationSVG';
import StarSVG from './SVG/StarSVG';

const CardSection = () => {
  return (
    <View>
      <View
        style={{ borderWidth: 1, borderRadius: 10, borderColor: '#E6E6E6' }}
      >
        <View style={CardStyles.ViewStyle}>
          <ImageBackground
            source={imageOne}
            style={CardStyles.imageBackground}
          />
          <View style={CardStyles.durationView}>
            <LocationSVG size={15} fill={'#fff'} />
            <Text
              style={{
                color: '#000000',
                marginLeft: 5,
              }}
            >
              240m
            </Text>
          </View>

          <View style={CardStyles.ConnectView}>
            <Text
              style={{
                color: '#000000',
                marginLeft: 5,
              }}
            >
              Getaround Connect
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <Text style={{ color: 'black', padding: 5, fontSize: 20 }}>
              Theresa Webb
            </Text>
            <Text style={{ color: 'gray', padding: 5, fontSize: 20 }}>
              FROM
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
              </View>
              <Text style={{ color: 'gray', padding: 5, fontSize: 20 }}>
                {' '}
                1{' '}
              </Text>
            </View>
            <Text style={{ color: 'black', padding: 5, fontSize: 17 }}>
              kr63<Text style={{ color: 'gray' }}>/h </Text> kr480
              <Text style={{ color: 'gray' }}>/day</Text>
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#E6E6E6',
          marginTop: 8,
        }}
      >
        <View style={CardStyles.ViewStyle}>
          <ImageBackground
            source={imageTwo}
            style={CardStyles.imageBackground}
          />
          <View style={CardStyles.durationView2}>
            <LocationSVG size={15} fill={'#fff'} />
            <Text
              style={{
                color: '#fff',
                marginLeft: 5,
              }}
            >
              240m
            </Text>
          </View>

          <View style={CardStyles.ConnectView}>
            <Text
              style={{
                color: '#000000',
                marginLeft: 5,
              }}
            >
              Getaround Connect
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <Text style={{ color: 'black', padding: 5, fontSize: 20 }}>
              Leslie Alexander
            </Text>
            <Text style={{ color: 'gray', padding: 5, fontSize: 20 }}>
              FROM
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
                <StarSVG size={15} fill={'#9c8317'} />
              </View>
              <Text style={{ color: 'gray', padding: 5, fontSize: 20 }}>
                {' '}
                4{' '}
              </Text>
            </View>
            <Text style={{ color: 'black', padding: 5, fontSize: 17 }}>
              kr61<Text style={{ color: 'gray' }}>/h </Text> kr470
              <Text style={{ color: 'gray' }}>/day</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const CardStyles = StyleSheet.create({
  ViewStyle: {
    position: 'absolute',
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  imageBackground: {
    position: 'relative',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  durationView: {
    position: 'absolute',
    top: 8,
    left: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 6,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  durationView2: {
    position: 'absolute',
    top: 8,
    left: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 6,
    backgroundColor: '#f2b750',
    borderRadius: 15,
  },
  ConnectView: {
    position: 'absolute',
    top: 8,
    right: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 6,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
});
export default CardSection;
