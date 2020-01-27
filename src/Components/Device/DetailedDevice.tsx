import React, {useState, useEffect} from 'react';
import {View, Text, Alert, AsyncStorage} from 'react-native';
import DetailedDeviceView from '../../Containers/Device/DetailedDeviceView';
import endpoints from '../../utils/endpoints.json';

import Axios from 'axios';
/**
 * Device controller for application.
 */
const DetailedDevice = (props: any) => {
  const [color, setColor] = useState('red');
  const [showColorModal, setShowColorModal] = useState(false);

  //endpoint for devices
  const endpoint_devices = `${endpoints.base}/${endpoints.device}`;

  const devicename = props.navigation.getParam('devicename');
  const devicetype = props.navigation.getParam('devicetype');
  const devicestate = props.navigation.getParam('devicestate');
  const deviceaddress = props.navigation.getParam('deviceaddress');
  const deviceid = props.navigation.getParam('deviceid');

  const updateState = async (color: any) => {
    setColor(color);
    setShowColorModal(false);

    //update color on device

    const state = {
      id: deviceid,
      devicestate: {color: color},
    };

    Axios.post(endpoint_devices, state, {
      headers: {
        jwttoken: await AsyncStorage.getItem('JWTTOKEN'),
      },
    })
      .then(res => {})
      .catch(error => {
        // Alert.alert(error + '');
      });
  };

  /**
   * On start, check...
   */
  useEffect(() => {
    // setColor(devicestate.color);
  }, []);

  return (
    <DetailedDeviceView
      devicename={devicename}
      devicetype={devicetype}
      devicestate={devicestate}
      deviceaddress={deviceaddress}
      deviceid={deviceid}
      color={color}
      setColor={setColor}
      showColorModal={showColorModal}
      setShowColorModal={setShowColorModal}
      updateState={updateState}
    />
  );
};

export default DetailedDevice;
