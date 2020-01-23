import Login from './src/Components/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
