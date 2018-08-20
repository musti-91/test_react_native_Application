import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	TouchableHighlight,
	ActivityIndicator,
	Image,
	Text,
	TouchableOpacity,
	Animated,
	Easing
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import AddUser from './AddUser';
import { deleteUser } from '../../redux/userAction';

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
			title: 'User Profile',
			component: UserProfile,
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
		this.props.deleteUser(id);
	};
	render() {
		const { users } = this.props;
		let { fadeIn } = this.state.style;
		return users.length === 0 ? (
			<View style={styles.loading}>
				<ActivityIndicator size="large" color="green" />
			</View>
		) : (
			<View style={{ marginTop: 50 }}>
				<List style={styles.usersContent}>
					{users.map((user, i) => (
						<TouchableHighlight
							onPress={() => this._onNavigate(user)}
							key={i}
							underlayColor="#EF8A70"
							style={styles.col}
						>
							<ListItem
								roundAvatar
								avatar={require('../images/user.png')}
								key={i}
								title={user.name}
								titleStyle={styles.titleStyle}
								leftIcon={{ source: require('../images/logo.png') }}
								chevronColor="#EF8A70"
								subtitle={user.phone}
								subtitleStyle={{ color: '#EF8A70', fontSize: 10, marginLeft: 10 }}
								rightIcon={<Icon name="delete" onPress={() => this._onDelete(i)} color="red" />}
								style={styles.colContent}
								containerStyle={styles.colContent}
							/>
						</TouchableHighlight>
					))}
					<View style={styles.add_user_container}>
						<Animated.View style={{ opacity: fadeIn }}>
							<TouchableOpacity
								onPress={this._onAddUser}
								style={{ borderRadius: 25 }}
								underlayColor="#fff"
							>
								<Image source={require('../images/plus.png')} style={styles.add_user_image} />
							</TouchableOpacity>
						</Animated.View>
					</View>
				</List>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	usersContent: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#F01'
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	col: {
		width: '90%',
		height: 50,
		borderRadius: 5,
		alignSelf: 'center'
	},
	colContent: {
		width: '100%',
		height: 50
	},
	titleStyle: {
		marginLeft: 10,
		borderColor: 'teal',
		color: 'white',
		color: 'teal'
	},
	add_user_container: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginTop: 20,
		paddingRight: 20
	},
	add_user_image: {
		width: 50,
		height: 50,
		borderRadius: 25
	}
});

export default connect(
	(state) => ({ users: state.users.users, title: 'Home' }),
	(dispatchEvent) => ({
		deleteUser: (id) => dispatchEvent(deleteUser(id))
	})
)(User);
