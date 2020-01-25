import React from 'react';
import {TextInput, View, Button, Text, Alert, Image} from 'react-native';
import {Buttons, Images, Input} from '../../Styles';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

/**
 * UI for a single device
 */
const Device = (props: any) => {
  const handlePress = () => Alert.alert('wtf');

  return (
    <TouchableNativeFeedback
      style={{
        backgroundColor: 'orange',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
      onPress={() => handlePress()}>
      <Text>Device Name</Text>
      <Image
        style={{...Images.DeviceStyle}}
        source={require('../../img/wave1.png')}
      />

      <Text>Device State</Text>
    </TouchableNativeFeedback>
  );
};

export default Device;
