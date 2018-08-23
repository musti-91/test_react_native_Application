import axios from 'axios';
const getPosts = (dispatchEvent) => {
	axios('http://reduxblog.herokuapp.com/api/posts')
		.then((responseJson) =>
			dispatchEvent({
				type: '_GET_POSTS',
				payload: responseJson.data
			})
		)
		.catch((error) =>
			dispatchEvent({
				type: '_ERROR',
				payload: error
			})
		);
};

export const addLikes = (id) => ({
	type: '_ADD_LIKE',
	payload: id
});
export const addComment = (postId, comment) => ({
	type: '_ADD_COMMENT',
	payload: {
		postId,
		comment
	}
});

export default getPosts;
