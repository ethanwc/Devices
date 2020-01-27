import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {Buttons, Images, Input, Textograph, Card} from '../../Styles';

/**
 * UI for a single device
 */
const DeviceView = (props: any) => {
  const handlePress = () =>
    props.navigation.navigate('DetailedDevice', {
      devicename: props.devicename,
      devicetype: props.devicetype,
      devicestate: props.devicestate,
      deviceaddress: props.deviceaddress,
      deviceid: props.deviceid,
    });

  return (
    <TouchableNativeFeedback onPress={() => handlePress()}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <View style={{...Card.DeviceInfo, flex: 3}}>
          <Text style={{...Textograph.DeviceText}}>{props.devicename}</Text>
          <Text>{props.devicetype}</Text>
        </View>
        <View style={{flex: 3, margin: 20}}>
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
