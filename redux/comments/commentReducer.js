import { comments } from './commentData';

const commentReducer = (state = comments, action) => {
	switch (action.type) {
		case '_GET_COMMENTS':
			return (state = [ ...state ]);
		case '_ADD_COMMENT':
			return (state = [ ...state, ...action.payload ]);
		default:
			return state;
	}
};
export default commentReducer;
