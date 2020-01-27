import React from 'react';
import {TextInput, View, Button, Text, Alert, Image} from 'react-native';
import {Buttons, Images, Input} from '../../Styles';
import Modal from 'react-native-modal';
import {ColorPicker} from 'react-native-color-picker';
import {toHsv, fromHsv} from 'react-native-color-picker';

/**
 * Color Modal for selecting device led color
 */
const ColorModal = (props: any) => {
  return (
    <View>
      <Modal
        isVisible={props.showColorModal}
        hasBackdrop={true}
        backdropColor={'black'}
        backdropOpacity={0.7}>
        <View style={{flex: 4}}>
          <ColorPicker
            color={props.color}
            defaultColor={props.color}
            onColorChange={color => props.setColor(fromHsv(color))}
            onColorSelected={color => props.updateState(fromHsv(color))}
            style={{flex: 1}}
          />
        </View>
        <View style={{flex: 1}}></View>
      </Modal>
    </View>
  );
};

export default ColorModal;
