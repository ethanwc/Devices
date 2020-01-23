import React from 'react';
import {View, Text, TextInput} from 'react-native';

/**
 * Login controller for application.
 */
const LoginView = (props: any) => {
  /**
   * On start, check...
   */

  return (
    <View>
     <TextInput
          style={{
            height: 40,
            margin: 10,
            marginBottom: 0,
            borderColor: '#528F7D',
            borderWidth: 1,
          }}
          placeholder="Username"
          value={props.username}
          onChangeText={text => props.setUsername(text)}
        />
    </View>
  );
};

export default LoginView;
