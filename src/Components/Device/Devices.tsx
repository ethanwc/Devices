import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import DevicesView from '../../Containers/Device/DevicesView';
/**
 * Device controller for application.
 */
const Devices = (props: any) => {
  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return <DevicesView navigation={props.navigation} />;
};

export default Devices;
