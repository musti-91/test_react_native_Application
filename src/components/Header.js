import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const { header } = styles;
	return (
		<View style={header}>
			<Text style={{ fontSize: 30 }}> {props.title}</Text>
		</View>
	);
};
const styles = {
	header: {
		marginLeft: 100
	}
};
export default Header;
