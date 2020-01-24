import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import LoginView from '../../Containers/Login/LoginView';
/**
 * Login controller for application.
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('ethanwc');
  const [password, setPassword] = useState('password');

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return (
    <LoginView
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      navigation={props.navigation}
    />
  );
};

export default Login;
