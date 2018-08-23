export const addComment = (comments) => {
	return {
		type: '_ADD_COMMENT',
		payload: comments
	};
};
export const getComments = (dispatchEvent) => {
	return dispatchEvent({
		type: '_GET_COMMENTS'
	});
};
