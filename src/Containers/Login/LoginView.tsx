import React from 'react';
import {TextInput, View, Button, Text, Alert, Image} from 'react-native';
import {Buttons, Images, Input} from '../../Styles';

/**
 * UI for login page
 */
const Login = (props: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#A4C6CC'}}>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{...Images.LogoStyle}}
          source={require('../../img/wave1.png')}
        />
      </View>
      <View style={{flex: 5}}>
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Username"
          value={props.username}
          onChangeText={text => props.setUsername(text)}
        />
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Password"
          value={props.password}
          secureTextEntry={true}
          onChangeText={text => props.setPassword(text)}
        />
        <View style={{marginLeft: 10, marginRight: 10, paddingTop: 10}}>
          <Button
            title="Sign In"
            color="#193335"
            onPress={() => props.navigation.navigate('Device')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <View>
            <Text onPress={() => props.navigation.navigate('Register')}>
              New User?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
