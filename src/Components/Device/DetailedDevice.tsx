import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import DetailedDeviceView from '../../Containers/Device/DetailedDeviceView';
import Axios from 'axios';
/**
 * Device controller for application.
 */
const DetailedDevice = (props: any) => {
  //   const [password, setPassword] = useState('password');

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return <DetailedDeviceView />;
};

export default DetailedDevice;
