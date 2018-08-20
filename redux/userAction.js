import Axios from 'axios';
const getUsers = (dispatchEvent) => {
	Axios.get('http://jsonplaceholder.typicode.com/users').then((response) =>
		dispatchEvent({
			type: '_GET_USERS',
			payload: response.data
		})
	);
};

export const addUser = (user) => {
	return {
		type: 'ADD_USER',
		payload: user
	};
};
export default getUsers;
