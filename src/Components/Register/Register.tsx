import React, {useState} from 'react';
import Axios from 'axios';
import RegisterView from '../../Containers/Register/RegisterView';
import endpoints from '../../utils/endpoints.json';
import {Alert} from 'react-native';

/**
 * Register controller for application.
 */
const Register = (props: any) => {
  const [fname, setFname] = useState('ethan');
  const [lname, setLname] = useState('cheatham');
  const [username, setUsername] = useState('ethanwc');
  const [password1, setPassword1] = useState('password');
  const [password2, setPassword2] = useState('password');

  //endpoint for login
  const endpoint_register = `${endpoints.base}/${endpoints.auth}/${endpoints.register}`;

  const handleRegister = async () => {
    const info = {
      fname: fname,
      lname: lname,
      username: username,
      password1: password1,
      password2: password2,
    };

    Axios.post(endpoint_register, info)
      .then(res => {
        props.navigation.goBack();
      })
      .catch(error => {
        if (error.response.status == 409)
          Alert.alert('Username already exists');
        else Alert.alert('Error Occured');
      });
  };

  return (
    <RegisterView
      fname={fname}
      setFname={setFname}
      setLname={setLname}
      lname={lname}
      username={username}
      setUsername={setUsername}
      password1={password1}
      setPassword1={setPassword1}
      password2={password2}
      setPassword2={setPassword2}
      handleRegister={handleRegister}
    />
  );
};

export default Register;
