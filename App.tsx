import Login from './src/Components/Login/Login';
import Register from './src/Components/Register/Register';
import Device from './src/Components/Device/Device';

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
  Device: {
    screen: Device,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
