import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, AsyncStorage, Alert} from 'react-native';
import Axios from 'axios';
import DevicesView from '../../Containers/Device/DevicesView';
import endpoints from '../../utils/endpoints.json';

/**
 * Device controller for application.
 */
const Devices = (props: any) => {
  const [deviceData, setDeviceData] = useState(undefined);
  //endpoint for devices
  const endpoint_devices = `${endpoints.base}/${endpoints.device}`;

  /**
   * On start, load device data
   */
  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    Axios.get(endpoint_devices, {
      headers: {
        jwttoken: await AsyncStorage.getItem('JWTTOKEN'),
      },
    })
      .then(res => {
        setDeviceData(res.data);
      })
      .catch(error => {
        Alert.alert('Error occured loading devices');
      });
  };

  const rendered =
    props.deviceData !== undefined ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <DevicesView navigation={props.navigation} deviceData={deviceData} />
    );

  return rendered;
};

export default Devices;
