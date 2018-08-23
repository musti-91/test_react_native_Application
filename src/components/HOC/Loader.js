import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = (WrappedComponent) => {
	return class Loader extends Component {
		render() {
			const { loadingIcon } = styles;
			return this.props.length === 0 ? (
				<View style={loadingIcon}>
					<ActivityIndicator size="large" color="teal" />
				</View>
			) : (
				<WrappedComponent {...this.props} />
			);
		}
	};
};
const styles = {
	loadingIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}
};
export default Loader;
