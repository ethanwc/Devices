import Login from './src/Components/Login/Login';
import Register from './src/Components/Register/Register';
import Devices from './src/Components/Device/Devices';
import DetailedDevice from './src/Components/Device/DetailedDevice';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },

  Register: {
    screen: Register,
  },

  Devices: {
    screen: Devices,
  },

  DetailedDevice: {
    screen: DetailedDevice,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
