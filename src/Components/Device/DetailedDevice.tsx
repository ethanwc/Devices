import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import DetailedDeviceView from '../../Containers/Device/DetailedDeviceView';
import Axios from 'axios';
/**
 * Device controller for application.
 */
const DetailedDevice = (props: any) => {
  const [color, setColor] = useState('#ff00c5');
  const [showColorModal, setShowColorModal] = useState(false);

  const updateState = (color: any) => {
    setColor(color);
    setShowColorModal(false);
  };

  /**
   * On start, check...
   */
  useEffect(() => {}, []);

  return (
    <DetailedDeviceView
      color={color}
      setColor={setColor}
      showColorModal={showColorModal}
      setShowColorModal={setShowColorModal}
      updateState={updateState}
    />
  );
};

export default DetailedDevice;
