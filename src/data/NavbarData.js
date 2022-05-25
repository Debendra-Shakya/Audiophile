import {FaCartPlus} from "react-icons/fa"

const iconStyle = (Icon) => <Icon />;
export const data = [
	{
		to: '/',
		text: 'HOME',
		id: 'home',
	},
	{
		to: '/headphones',
		text: 'HEADPHONES',
	},
	{
		to: '/speakers',
		text: 'SPEAKERS',
	},
	{
		to: '/earphones',
		text: 'EARPHONES',
	},
	{
		to:'/cart',
		icon: iconStyle(FaCartPlus),
	}
];