import React from 'react';
import {TextInput, View, Button, Text, Alert, Image} from 'react-native';
import {Buttons, Images, Input} from '../../Styles';

/**
 * UI for a single device
 */
const Device = (props: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#A4C6CC'}}>
      <View style={{flex: 5}}>
        <Image
          style={{...Images.LogoStyle}}
          source={require('../../img/wave1.png')}
        />
        <Text>Device Name</Text>
        <Text>Device State</Text>

        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Username"
          value={props.username}
          onChangeText={text => props.setUsername(text)}
        />

        <View style={{marginLeft: 10, marginRight: 10, paddingTop: 10}}>
          <Button
            title="Sign In"
            color="#193335"
            onPress={() => Alert.alert('hi')}
          />
        </View>
      </View>
    </View>
  );
};

export default Device;
