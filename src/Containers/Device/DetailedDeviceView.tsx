import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {Buttons, Images, Input, Textograph, Card} from '../../Styles';

/**
 * Detailed UI for a single device
 */
const DetailedDeviceView = (props: any) => {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <View style={{...Card.DeviceInfo}}>
        <Text style={{...Textograph.DeviceText}}>Device Name</Text>
        <Text>Device State</Text>
      </View>
      <View>
        <Image
          style={{...Images.DeviceStyle}}
          source={require('../../img/rp3.png')}
        />
      </View>
    </View>
  );
};

export default DetailedDeviceView;
