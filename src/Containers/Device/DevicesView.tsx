import React from 'react';
import {
  TextInput,
  View,
  Button,
  Text,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import {Buttons, Images, Input} from '../../Styles';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import DeviceView from './DeviceView';

/**
 * UI for a single device
 */
const Devices = (props: any) => {
  const data = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <FlatList
        data={data}
        renderItem={() => <DeviceView navigation={props.navigation} />}
        keyExtractor={(item: {id: any}) => item.id}
      />
    </View>
  );
};

export default Devices;
