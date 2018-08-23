import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loader from '../../HOC/Loader';

import ModalOptions from '../../ModalOptions';
import PostMenu from '../PostMenu';
class Card extends Component {
	constructor() {
		super();
		this.commentField = React.createRef();
	}
	state = {
		countPress: 0,
		isLiked: false,
		nrOfLiked: 0,
		comments: this.props.comments,
		text: '',
		modalVisible: false
	};
	static propTypes = {
		post: PropTypes.object.isRequired,
		goTo: PropTypes.func.isRequired
	};
	_onSubmit = () => {
		const { text, comments } = this.state;
		this.setState({ text: '', comments: [ ...comments, text ] });
	};

	_onLogoUserClicked = (postId) => {
		this.props.goTo(postId);
	};
	_onHeartClicked = (postId) => {
		const { countPress, isLiked, nrOfLiked } = this.state;
		this.setState({ countPress: countPress + 1 });
		if (countPress % 2 === 0) {
			this.setState({
				isLiked: !isLiked
			});
			if (isLiked) {
				this.setState({
					nrOfLiked: nrOfLiked - 1
				});
			} else {
				this.setState({
					nrOfLiked: nrOfLiked + 1
				});
			}
		}
		return;
	};
	_onCommentIconClicked = () => {
		this.commentField.focus();
	};
	_onPostMenuClicked = (postId) => {
		return <PostMenu postId={postId} />;
	};

	_renderCommentsPerPost = () =>
		this.state.comments.map((comment, i) => (
			<View style={styles.card.comments.comment.row} key={i}>
				<Icon
					name="people"
					color="teal"
					size={20}
					style={{ width: '25%', alignSelf: 'center', alignItems: 'center' }}
				/>
				<Text style={styles.card.comments.comment.txt}>{comment}</Text>
			</View>
		));

	_showModel = () => {
		const { modalVisible } = this.state;
		return <ModalOptions isVisible={modalVisible} setVisibility={() => this.setState({ modalVisible: false })} />;
	};
	render() {
		const { post } = this.props;
		const { container, card } = styles;
		const { modalVisible } = this.state;
		return (
			<View style={container}>
				<View style={card.content}>
					<View style={card.head.content}>
						<TouchableOpacity style={card.head.logo} onPress={() => this._onLogoUserClicked(post.id)}>
							<Image source={{ uri: post.user_id.img_url }} />
							<Text style={{ marginLeft: 20, width: 100 }}>{post.title}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this._onPostMenuClicked(post.id)}>
							<Icon name="more" color="teal" size={25} />
						</TouchableOpacity>
					</View>
					<View style={card.image}>
						<TouchableOpacity onPress={() => this._onHeartClicked(post.id)}>
							<Image source={{ uri: post.img_url }} resizeMode="cover" style={{ width: '100%' }} />
						</TouchableOpacity>
					</View>
					<View style={card.actionsField.content}>
						<TouchableOpacity style={card.actionsField.likeIcon}>
							<Icon name="heartbeat" type="font-awesome" color="#f50" size={25} />
						</TouchableOpacity>
						<TouchableOpacity style={card.actionsField.commentIcon} onPress={this._onCommentIconClicked}>
							<Icon name="comment" type="font-awasome" size={25} />
						</TouchableOpacity>
						<TouchableOpacity
							style={card.actionsField.sharePost}
							onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
						>
							<Icon name="share" type="font-awasome" size={25} />
						</TouchableOpacity>
						{modalVisible ? this._showModel() : null}
					</View>
					<View style={card.comments.content}>
						<Text style={card.comments.likes}>{`${this.state.nrOfLiked} likes`}</Text>
						<View style={card.comments.comment.row}>
							<Icon name="people" color="grey" size={20} style={card.comments.comment.icon} />
							<TextInput
								ref={(comment) => (this.commentField = comment)}
								value={this.state.text}
								onChangeText={(text) => this.setState({ text })}
								onSubmitEditing={this._onSubmit}
								placeholder="comment"
								style={card.comments.comment.input}
							/>
						</View>
						{this.state.comments.length <= 3 ? (
							this._renderCommentsPerPost()
						) : (
							<View>
								<Text>no comments</Text>
							</View>
						)}
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignContent: 'flex-start'
	},
	card: {
		content: {
			paddingTop: 10,
			paddingBottom: 10,
			borderBottomWidth: 0.2,
			shadowColor: 'rgba(255,255,255,0.3)',
			shadowOffset: { width: 1, height: 1 },
			shadowOpacity: 0.4,
			shadowRadius: 12,

			flexDirection: 'column'
		},
		head: {
			content: {
				width: '100%',
				height: 50,
				paddingLeft: 10,
				paddingRight: 10,
				borderTopColor: 'grey',
				alignItems: 'center',
				alignSelf: 'center',
				flexDirection: 'row',
				justifyContent: 'space-between'
			},
			logo: {
				width: 50,
				height: 50,
				borderRadius: 25,
				flexDirection: 'row',
				alignItems: 'center'
			}
		},
		image: {
			marginTop: 10,
			width: '100%'
		},
		actionsField: {
			content: {
				marginTop: 5,
				flexDirection: 'row'
			},
			likeIcon: {
				marginRight: 20,
				paddingLeft: 10
			},
			commentIcon: {
				marginRight: 20
			}
		},
		comments: {
			content: {
				flexDirection: 'column',
				marginTop: 10,
				paddingLeft: 10,
				width: '100%'
			},
			likes: {
				textAlign: 'left',
				alignItems: 'flex-start',
				justifyContent: 'flex-start'
			},
			comment: {
				row: {
					flexDirection: 'row'
				},
				icon: {
					width: '25%',
					alignSelf: 'center'
				},
				input: {
					marginLeft: 10,
					borderRadius: 10,
					width: '90%',
					borderWidth: 1,
					borderColor: 'grey',
					shadowOpacity: 0.2,
					padding: 2,
					fontSize: 18,
					paddingLeft: 5
				},
				col: {
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'flex-start'
				},
				txt: {
					marginTop: 10,
					marginLeft: 10,
					width: '90%',
					shadowOpacity: 0.2,
					padding: 2,
					fontSize: 16,
					paddingLeft: 5,
					alignSelf: 'center'
				}
			}
		}
	},
	modal: {
		width: 100,
		height: 100,
		backgroundColor: 'orange',
		marginTop: 150,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
const mapActionToProps = (dispatch) => ({
	addLike: (postId) => dispatch(addLike(postId))
});
export default connect((state) => ({ comments: state.comments }), mapActionToProps)(Loader(Card));
