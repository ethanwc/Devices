import React from 'react';
import {TextInput, View, Button, Text, Alert, Image} from 'react-native';
import {Images, Input} from '../../Styles';

/**
 * UI for register page
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
      <View style={{flex: 6}}>
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="First name"
          value={props.fname}
          onChangeText={text => props.setFname(text)}
        />
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Last name"
          value={props.lname}
          onChangeText={text => props.setLname(text)}
        />
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Username"
          value={props.username}
          onChangeText={text => props.setUsername(text)}
        />
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Password"
          value={props.password1}
          secureTextEntry={true}
          onChangeText={text => props.setPassword1(text)}
        />
        <TextInput
          style={{...Input.TextInputMain}}
          placeholder="Confirm Password"
          value={props.password2}
          secureTextEntry={true}
          onChangeText={text => props.setPassword2(text)}
        />
        <View style={{marginLeft: 10, marginRight: 10, paddingTop: 10}}>
          <Button
            title="Sign Up"
            color="#193335"
            onPress={() => props.handleRegister()}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
