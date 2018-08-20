import React, { Component } from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// reducer
import reducer from './redux/reducer';
import Home from './src/Home';

const store = createStore(combineReducers({ users: reducer }), applyMiddleware(thunk, createLogger()));

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
						component: Home
					}}
				/>
			</Provider>
		);
	}
}
const styles = StyleSheet.create({
	content: {
		flex: 1
	}
});
