import { userData } from '../users/userData';
import { comments } from '../comments/commentData';
export const postData = [
	{
		id: 272704,
		likes: 123,
		place: 'Somewhere',
		title: 'Hello World!',
		categories: 'Testing',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.splice(0, comments.length - 1),
		img_url: 'https://placeimg.com/500/500/tech'
	},
	{
		id: 272511,
		likes: 123,
		place: 'Somewhere',
		title: '123hey bbfew',
		categories: 'not set yet',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.splice(0, 4),
		img_url: 'https://placeimg.com/500/500/tech'
	},
	{
		id: 272510,
		likes: 123,
		place: 'Somewhere',
		title: 'hey bbfew',
		categories: 'react native',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(3, 5),
		img_url: 'https://placeimg.com/500/500/tech'
	},
	{
		id: 272399,
		likes: 123,
		place: 'Somewhere',
		title: 'Hi!',
		categories: 'Computer, Friends',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(3, 8),
		img_url: 'https://placeimg.com/500/500/tech'
	},
	{
		id: 272323,
		likes: 123,
		place: 'Somewhere',
		title: 'test',
		categories: 'test',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(0, 3),
		img_url: 'https://placeimg.com/500/500/tech'
	},
	{
		id: 271000,
		likes: 123,
		place: 'Somewhere',
		title: 'Hi!',
		categories: 'Computer, Friends',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(5, 7),
		img_url: 'https://placeimg.com/500/500/tech/'
	},
	{
		id: 270703,
		likes: 123,
		place: 'Somewhere',
		title: 'hey nnn',
		categories: 'not set yet',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(0, 5),
		img_url: 'https://placeimg.com/500/500/tech/'
	},
	{
		id: 270702,
		likes: 123,
		place: 'Somewhere',
		title: 'hey nnn',
		categories: 'not set yet',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(0, 5),
		img_url: 'https://placeimg.com/500/500/tech/'
	},
	{
		id: 270329,
		likes: 123,
		place: 'Somewhere',
		title: 'Claudio',
		categories: 'not set yet',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(0, 5),
		img_url: 'https://placeimg.com/500/500/tech/'
	},
	{
		id: 270303,
		likes: 123,
		place: 'Somewhere',
		title: 'Sample blog',
		categories: 'not set yet',
		user_id: userData[Math.floor(Math.random() * 1)],
		comments: comments.slice(0, 5),
		img_url: 'https://placeimg.com/500/500/tech/'
	}
];
