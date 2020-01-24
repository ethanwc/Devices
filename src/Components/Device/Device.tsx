import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import DeviceView from '../../Containers/Device/DeviceView';
/**
 * Device controller for application.
 */
const Device = (props: any) => {
//   const [password, setPassword] = useState('password');

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return <DeviceView />;
};

export default Device;
