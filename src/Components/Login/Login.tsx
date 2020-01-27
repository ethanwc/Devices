import React, {useState} from 'react';
import Axios from 'axios';
import LoginView from '../../Containers/Login/LoginView';
import endpoints from '../../utils/endpoints.json';
import {Alert} from 'react-native';
/**
 * Login controller for application.
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('ethanwc');
  const [password, setPassword] = useState('password');

  //endpoint for login
  const endpoint_login = `${endpoints.base}/${endpoints.auth}/${endpoints.login}`;

  const handleLogin = async () => {
    const info = {
      username: username,
      password: password,
    };

    Axios.post(endpoint_login, info)
      .then(res => {
        props.navigation.navigate('Devices');
      })
      .catch(error => {
        if (error.response.status == 404) Alert.alert('User not found');
        else Alert.alert('Error Occured');
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
