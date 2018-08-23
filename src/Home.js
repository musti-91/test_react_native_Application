import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
//Actions
import getUsers from '../redux/users/userAction';
import getPosts from '../redux/posts/postAction';

//components
import User from './components/User/User';
import Posts from './components/Posts/Posts';

class Home extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	};
	_onNavigate = () => {
		this.props.navigator.push({
			title: 'Users',
			component: (props) => <User {...props} title="USERS" />
		});
	};
	_postsNavigate = () => {
		this.props.navigator.push({
			title: 'posts',
			component: (props) => <Posts {...props} title="posts" />
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
					<Text style={styles.btn_users}>Users</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#F5FCFF" onPress={this._postsNavigate} style={styles.btn_container}>
					<Text style={styles.btn_users}>Instagraph</Text>
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
		height: '100%',
		opacity: 0.9
	},
	btn_container: {
		backgroundColor: 'teal',
		opacity: 0.9,
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

export default connect(
	(state) => ({ users: state.users.users, posts: state.posts.posts, comments: state.comments }),
	null
)(Home);
