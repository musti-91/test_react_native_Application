import { createStackNavigator } from 'react-navigation';
import Home from './src/Home';
const route = createStackNavigator({
	Home: {
		screen: Home
	}
});
export default route;
