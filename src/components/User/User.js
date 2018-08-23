import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableHighlight, Image, TouchableOpacity, Animated, Easing, Alert } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import AddUser from './AddUser';
import { deleteUser } from '../../../redux/users/userAction';
import { styles } from './styles';
//loader icon
import Loader from '../HOC/Loader';

class User extends Component {
	state = {
		style: {
			fadeIn: new Animated.Value(0)
		}
	};
	componentDidMount() {
		Animated.timing(this.state.style.fadeIn, { toValue: 1, duration: 2000, easing: Easing.linear }).start();
	}

	static propTypes = {
		users: PropTypes.array.isRequired
	};
	_onNavigate = (user) => {
		this.props.navigator.push({
			title: `${user.name}`,
			component: (props) => <UserProfile {...props} title="User Profile" />,
			passProps: { user }
		});
	};
	_onAddUser = () => {
		this.props.navigator.push({
			title: 'Add User',
			component: AddUser
		});
	};
	_onDelete = (id) => {
		Alert.alert('Are you sure?', 'Confirm', [
			{ text: 'Cancel', onPress: () => null },
			{ text: 'Yes', onPress: () => this.props.deleteUser(id) }
		]);
	};
	render() {
		const { users } = this.props;
		let { fadeIn } = this.state.style;
		const { usersContent, titleStyle, colContent, add_user_container, add_user_image } = styles;
		return (
			<View style={{ marginTop: 50 }}>
				<List style={usersContent}>
					{users.map((user, i) => (
						<TouchableHighlight
							onPress={() => this._onNavigate(user)}
							key={i}
							underlayColor="#EF8A70"
							style={styles.col}
						>
							<ListItem
								roundAvatar
								avatar={{ uri: user.img_url }}
								key={i}
								title={user.name}
								titleStyle={titleStyle}
								leftIcon={{ source: { uri: user.img_url } }}
								chevronColor="#EF8A70"
								subtitle={user.phone}
								subtitleStyle={{ color: '#EF8A70', fontSize: 10, marginLeft: 10 }}
								rightIcon={<Icon name="delete" onPress={() => this._onDelete(i)} color="red" />}
								style={colContent}
								containerStyle={colContent}
							/>
						</TouchableHighlight>
					))}
					<View style={add_user_container}>
						<Animated.View style={{ opacity: fadeIn }}>
							<TouchableOpacity
								onPress={this._onAddUser}
								style={{ borderRadius: 25 }}
								underlayColor="#fff"
							>
								<Image source={require('../../images/plus.png')} style={add_user_image} />
							</TouchableOpacity>
						</Animated.View>
					</View>
				</List>
			</View>
		);
	}
}
export default connect(
	(state) => ({ users: state.users.users, title: 'Home' }),
	(dispatchEvent) => ({
		deleteUser: (id) => dispatchEvent(deleteUser(id))
	})
)(Loader(User));
