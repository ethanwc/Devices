import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import RegisterView from '../../Containers/Register/RegisterView';
/**
 * Register controller for application.
 */
const Register = (props: any) => {
  const [fname, setFname] = useState('ethan');
  const [lname, setLname] = useState('cheatham');
  const [username, setUsername] = useState('ethanwc');
  const [password1, setPassword1] = useState('password');
  const [password2, setPassword2] = useState('password');

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

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
    />
  );
};

export default Register;
