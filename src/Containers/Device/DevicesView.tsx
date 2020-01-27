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
  const data = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

  return (
    <View style={{...Card.DevicesView}}>
      <FlatList
        data={data}
        renderItem={() => <Device navigation={props.navigation} />}
        keyExtractor={(item: {id: any}) => item.id}
      />
    </View>
  );
};

export default DevicesView;
