import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import LoginView from '../../Containers/Login/LoginView'
/**
 * Login controller for application.
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('ethanwc');
  const [password, setPassword] = useState('password');
  const [remember, setRemember] = useState(false);

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return (
    <LoginView username={username} setUsername={setUsername}/>
  );
};

export default Login;
