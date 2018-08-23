import axios from 'axios';
const getUsers = (dispatchEvent) => {
	axios
		.get('http://jsonplaceholder.typicode.com/users')
		.then((response) =>
			dispatchEvent({
				type: '_GET_USERS',
				payload: response.data
			})
		)
		.catch((error) => dispatchEvent({ type: '_ERROR', payload: error }));
};

export const addUser = (user) => {
	return {
		type: 'ADD_USER',
		payload: user
	};
};

export const deleteUser = (id) => {
	return {
		type: 'DELETE_USER',
		payload: id
	};
};
export default getUsers;
