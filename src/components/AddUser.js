import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../../redux/userAction';

import User from './User';

class AddUser extends Component {
	state = {
		user: {
			id: Math.floor(Math.random() * 30),
			name: '',
			username: '',
			email: '',
			address: {
				street: '',
				suite: '',
				city: '',
				zipcode: ''
			},
			phone: '',
			website: '',
			company: {
				name: ''
			}
		}
	};
	_onSubmit = () => {
		this.props.addUser(this.state.user);
		this.props.navigator.push({
			title: 'Users',
			component: User
		});
	};
	_onChange = (text) => {
		const fields = [ 'name', 'username', 'email', 'phone', 'website' ];
		for (let field of fields) {
			this.state.user[field] = text;
		}
		this.setState({
			user: {
				name: fields[0],
				username: fields[1],
				email: fields[2],
				phone: fields[3],
				website: fields[4],
				company: { name: 'undefined' },
				address: {
					street: 'not specified',
					suite: 'not specified',
					city: 'not specified',
					zipcode: 'not specified'
				}
			}
		});
	};

	render() {
		const { user } = this.state;
		return (
			<View style={styles.container}>
				<TextInput value={user.name} onChangeText={this._onChange} placeholder="Name" keyboardType="default" />
				<TextInput
					value={user.username}
					onChangeText={this._onChange}
					placeholder="User name"
					keyboardType="default"
					enablesReturnKeyAutomatically={true}
					returnKeyType="next"
					returnKeyLabel="Next"
				/>
				<TextInput
					value={user.phone}
					onChangeText={this._onChange}
					placeholder="Phone"
					keyboardType="default"
					returnKeyType="next"
					returnKeyLabel="Next"
					enablesReturnKeyAutomatically={true}
				/>
				<TextInput
					value={user.email}
					onChangeText={this._onChange}
					placeholder="email"
					keyboardType="default"
					returnKeyType="next"
					returnKeyLabel="Next"
					enablesReturnKeyAutomatically={true}
				/>
				<TextInput
					value={user.website}
					onChangeText={this._onChange}
					placeholder="Website"
					keyboardType="default"
					returnKeyLabel="Next"
					returnKeyType="next"
					enablesReturnKeyAutomatically={true}
				/>
				<TextInput
					value={user.address.street}
					// onChangeText={address=>this.setState({user:{...}})}
					placeholder="Website"
					keyboardType="default"
					returnKeyLabel="Next"
					returnKeyType="next"
					enablesReturnKeyAutomatically={true}
				/>
				<Button onPress={this._onSubmit} title="add me" />
			</View>
		);
	}
}
const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	}
};
export default connect(null, (dispatchEvent) => ({
	addUser: (user) => dispatchEvent(addUser(user))
}))(AddUser);
