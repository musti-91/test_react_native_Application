import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import { Provider } from 'react-redux';
// redux store
import store from './redux/store';
// components
import Home from './src/Home';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<NavigatorIOS
					style={styles.content}
					barTintColor="teal"
					titleTextColor="#fff"
					tintColor="white"
					navigationBarHidden={false}
					shadowHidden={true}
					translucent={true}
					initialRoute={{
						title: 'Home',
						component: (props) => <Home {...props} title="home" />
					}}
				/>
			</Provider>
		);
	}
}
const styles = {
	content: {
		flex: 1
	}
};
