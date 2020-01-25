import Login from './src/Components/Login/Login';
import Register from './src/Components/Register/Register';
import Device from './src/Containers/Device/DevicesView';
import Data from './src/Containers/Data/DataView';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Data: {
    screen: Data,
  },
  Device: {
    screen: Device,
  },
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
});

const App = createAppContainer(AppNavigator);

export default App;
