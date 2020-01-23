import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
/**
 * Login controller for application.
 * Handles login, and allows user to save info for auto login
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('e@mail.com');
  const [password, setPassword] = useState('password');
  const [remember, setRemember] = useState(false);

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return (
    <View>
      <Text>hi</Text>
    </View>
  );
};

export default Login;
