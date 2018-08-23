import { postData } from './postData';
const postsState = {
	loading: false,
	posts: postData,
	likes: 12
};

const postsReducer = (state = postsState, action) => {
	switch (action.type) {
		case '_GET_POSTS':
			return (state = { ...state, loading: true, posts: [ ...action.payload ] });
		case '_ERROR':
			return (state = { ...state, loading: false });
		case '_ADD_LIKE':
			return (state = { ...state, likes: likes++ });
		case '_ADD_COMMENT':
			const { postId, comment } = action.payload;

			return (state = { ...state, posts: [ ...postId ].comments.push(comment) });
	}
	return state;
};
export default postsReducer;
