import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

class UserProfile extends Component {
	static propTypes = {
		user: PropTypes.object.isRequired,
		title: PropTypes.string.isRequired
	};
	render() {
		const { user } = this.props;
		return (
			<View style={styles.userProfile}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: user.img_url }}
						style={{ width: 100, height: 100, borderRadius: 50, marginRight: 30 }}
					/>
					<Text style={styles.txt}>{user.name}</Text>
				</View>
				<View style={styles.table}>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/username.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}>{user.username}</Text>
					</View>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/address.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}>
							{user.address.street}, {user.address.suite},{user.address.city}
						</Text>
					</View>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/phone.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}>{user.phone}</Text>
					</View>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/email.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}> {user.email}</Text>
					</View>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/company.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}>
							{user.company.name},{user.company.catchPhrase}
						</Text>
					</View>
					<View style={styles.table_tr}>
						<Text style={{ marginRight: 10 }}>
							<Image source={require('../../images/website.png')} style={styles.ico} />
						</Text>
						<Text style={styles.label}>{user.website}</Text>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	userProfile: {
		marginTop: 65,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#F5FCFF',
		width: '100%',
		height: '100%',
		padding: 10
	},
	txt: {
		color: '#000633',
		textAlign: 'center',
		width: 250,
		height: 35,
		fontSize: 30,
		alignSelf: 'center',
		justifyContent: 'center'
	},
	imageContainer: {
		alignSelf: 'flex-start',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	table: {
		width: '100%',
		padding: 20,
		marginTop: 30,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	table_tr: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom: 30
	},
	ico: {
		width: 25,
		height: 25
	},
	label: {
		color: '#000633'
	}
});
export default UserProfile;
