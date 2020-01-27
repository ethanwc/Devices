import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
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

  return (
    <DeviceView
      navigation={props.navigation}
      devicename={props.devicename}
      devicetype={props.devicetype}
      devicestate={props.devicestate}
      deviceaddress={props.deviceaddress}
      deviceid={props.deviceid}
    />
  );
};

export default Device;
