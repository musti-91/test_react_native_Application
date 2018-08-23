import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//actions
import { addComment } from '../../../../redux/posts/postAction';
//styles
import { styles } from './styles';
//components
import ModalOptions from '../../ModalOptions';
import PostMenu from '../PostMenu';
import Loader from '../../HOC/Loader';
class Card extends Component {
	constructor() {
		super();
		this.commentField = React.createRef();
	}
	state = {
		countPress: 0,
		isLiked: false,
		nrOfLiked: 0,
		text: '',
		comments: [],
		modalVisible: false
	};

	static propTypes = {
		post: PropTypes.object.isRequired,
		goTo: PropTypes.func.isRequired
	};
	componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
	}
	_onSubmit = (postIndex, userID) => {
		const { text, comments } = this.state;
		const comment = {
			id: Math.floor(Math.random() * 100),
			text,
			user_id: userID
		};
		this.setState({ comments: [ ...comments, { postIndex, ...comment } ] });
		this.props.posts[postIndex].comments.push(comment);
		// this.props.addComment(postIndex, comment);
	};

	_onLogoUserClicked = (postId) => {
		this.props.goTo(postId);
	};
	_onHeartClicked = () => {
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

	_renderCommentsPerPost = (postIndex) => {
		const commentsPerPost = this.props.posts[postIndex].comments;
		return commentsPerPost.splice(0, 2).map((comment, i) => (
			<View style={styles.card.comments.comment.row} key={i}>
				<Icon
					name="people"
					color="teal"
					size={20}
					style={{ width: '25%', alignSelf: 'center', alignItems: 'center' }}
				/>
				<Text style={styles.card.comments.comment.txt}>{comment.text}</Text>
			</View>
		));
	};

	_showModel = () => {
		const { modalVisible } = this.state;
		return <ModalOptions isVisible={modalVisible} setVisibility={() => this.setState({ modalVisible: false })} />;
	};

	render() {
		const { post, index } = this.props;
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
								onSubmitEditing={() => this._onSubmit(index, post.user_id)}
								placeholder="comment"
								style={card.comments.comment.input}
							/>
						</View>
						{this._renderCommentsPerPost(index)}
					</View>
				</View>
			</View>
		);
	}
}

const mapActionToProps = (dispatch) => ({
	addLike: (postId) => dispatch(addLike(postId)), //useless
	addComment: (postId, comment) => dispatch(addComment(postId, comment))
});
export default connect(
	(state) => ({
		comments: state.comments,
		posts: state.posts.posts
	}),
	mapActionToProps
)(Loader(Card));
