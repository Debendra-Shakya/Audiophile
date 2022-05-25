import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},

];
