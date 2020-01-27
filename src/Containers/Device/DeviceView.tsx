import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {Buttons, Images, Input, Textograph, Card} from '../../Styles';

/**
 * UI for a single device
 */
const DeviceView = (props: any) => {
  const handlePress = () => props.navigation.navigate('DetailedDevice');

  return (
    <TouchableNativeFeedback onPress={() => handlePress()}>
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
    </TouchableNativeFeedback>
  );
};

export default DeviceView;
