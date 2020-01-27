import React from 'react';
import {View, Text, Image, Button, Alert} from 'react-native';
import {Buttons, Images, Input, Textograph, Card} from '../../Styles';
import ColorModal from '../Modal/ColorModal';
import Data from '../Data/DataView';

/**
 * Detailed UI for a single device
 */
const DetailedDeviceView = (props: any) => {
  const colorModal = (
    <ColorModal
      showColorModal={props.showColorModal}
      setShowColorModal={props.setShowColorModal}
      color={props.color}
      setColor={props.setColor}
      updateState={props.updateState}
    />
  );

  const backgroundColor = props.color;

  const toggleColorModal = () => props.setShowColorModal(true);

  return (
    <View
      style={{...Card.DetailedDeviceInfo, backgroundColor: backgroundColor}}>
      <View style={{flex: 1}}>
        <Text style={{...Textograph.DetailedDeviceText}}>
          {props.devicename}
        </Text>
        <Text>{props.devicetype}</Text>
        <Text>{props.deviceaddress}</Text>
        <Text>{props.color}</Text>

        <Image
          style={{...Images.DetailedDeviceStyle}}
          source={require('../../img/rp3.png')}
        />
        <Button title="Edit Color" onPress={() => toggleColorModal()} />
      </View>

      <View style={{flex: 1}}>{colorModal}</View>
      <View style={{flex: 1}}>
        <Text style={{...Textograph.DetailedDeviceText}}>Temperature (C)</Text>

        <Data />
      </View>
    </View>
  );
};

export default DetailedDeviceView;
