import Login from './src/Components/Login/Login';
import Register from './src/Components/Register/Register';
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
});

const App = createAppContainer(AppNavigator);

export default App;
