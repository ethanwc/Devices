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
import {Buttons, Images, Input, Card} from '../../Styles';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Device from '../../Components/Device/Device';

/**
 * UI for a single device
 */
const DevicesView = (props: any) => {
  return (
    <View style={{...Card.DevicesView}}>
      <FlatList
        data={props.deviceData}
        renderItem={({item}: any) => (
          <Device
            navigation={props.navigation}
            devicename={item.devicename}
            devicetype={item.devicetype}
            devicestate={item.devicestate}
            deviceaddress={item.deviceaddress}
            deviceid={item.id}
          />
        )}
        keyExtractor={(item: {id: any}) => item.id}
      />
    </View>
  );
};

export default DevicesView;
