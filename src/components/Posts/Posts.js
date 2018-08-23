import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../Header';
import Loader from '../HOC/Loader';

import { connect } from 'react-redux';
import Card from './card/Card';
import User from '../User/User';
class Posts extends Component {
	static propTypes = {
		posts: PropTypes.array.isRequired
	};
	_onNavigateUser = (id) => {
		this.props.navigator.push({
			title: `User${id}`,
			component: User
		});
	};
	_keyExtractor = (post, i) => post.id.toString(); // very important otherwise it's shown error.
	_renderItems = ({ item, index }) => (
		<Card post={item} index={index} key={item.id} goTo={(id) => this._onNavigateUser(id)} />
	);
	render() {
		const { container, header } = styles;
		const { posts } = this.props;
		return (
			<View style={container}>
				<View style={header}>
					<Header title="INSTAGRAPH" />
					<TouchableOpacity onPress={this._onMenuClick}>
						<Icon name="menu" color="green" type="font-awasome" />
					</TouchableOpacity>
				</View>
				<FlatList data={posts} keyExtractor={this._keyExtractor} renderItem={this._renderItems} />
			</View>
		);
	}
}
const styles = {
	container: {
		flex: 1,
		alignContent: 'flex-start'
	},
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		width: '100%',
		paddingRight: 10,
		paddingLeft: 10
	}
};
export default connect((state) => ({ posts: state.posts.posts, comments: state.comments }), null)(Loader(Posts));
