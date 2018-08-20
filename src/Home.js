import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
//Actions
import getUsers from '../redux/userAction';
//components
import User from './components/User';

class Home extends Component {
	componentDidMount() {
		this.props.getUsers();
	}
	static propTypes = {
		getUsers: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	};
	_onNavigate = () => {
		this.props.navigator.push({
			title: 'Users',
			component: User
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginTop: 20 }}>
					<Image source={require('./images/logo.png')} style={styles.img} />
					<Text style={{ textAlign: 'center', marginTop: 30 }}>Welcome to WireFrame</Text>
					<Text style={{ textAlign: 'center', marginTop: 30 }}>
						This is testing app, shown all users thar are already registered
					</Text>
				</View>
				<TouchableHighlight underlayColor="#F5FCFF" onPress={this._onNavigate} style={styles.btn_container}>
					<Text style={styles.btn_users}>Show All users</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		height: '100%'
	},
	btn_container: {
		backgroundColor: 'teal',
		width: 300,
		height: 40,
		borderRadius: 20,
		marginTop: 10
	},
	btn_users: {
		color: 'white',
		width: 300,
		height: 40,
		fontSize: 30,
		textAlign: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		marginTop: 50
	}
});
const mapDispatchToProps = (dispatchEvent) => ({
	getUsers: () => dispatchEvent(getUsers)
});
export default connect((state) => ({ users: state.users }), mapDispatchToProps)(Home);
