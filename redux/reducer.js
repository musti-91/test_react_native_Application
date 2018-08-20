const usersState = {
	loading: false,
	users: []
};
export default function reducer(state = usersState, action) {
	switch (action.type) {
		case '_GET_USERS':
			state = { ...state, users: [ ...action.payload ], loading: true };
			break;
		case 'ADD_USER':
			state = { ...state, loading: false, error: false, users: [ ...state.users, action.payload ] };
			console.log(state);
			break;
		case 'DELETE_USER':
			const copyUsers = state.users;
			copyUsers.shift(action.payload);
			state = { ...state, users: [ ...copyUsers ] };
			break;
		default:
			return state;
	}
	return state;
}
