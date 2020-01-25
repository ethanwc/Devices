import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LoginView from '../../Containers/Login/LoginView';
import {Alert} from 'react-native';
/**
 * Login controller for application.
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('ethanwc');
  const [password, setPassword] = useState('password');

  //endpoint for login
  const endpoint_login = `https://localhost:3001/api/auth/login`;

  const handleLogin = async () => {
    const info = {
      username: username,
      password: password,
    };

    Axios.post(endpoint_login, info)
      .then(res => {
        console.debug(res)

      })
      .catch(error => {
        console.debug(error)
      });
  };

  return (
    <LoginView
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      navigation={props.navigation}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
