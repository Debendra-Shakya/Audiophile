import styled from "styled-components";

export const FooterRow=styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`
export const FooterColumn=styled.div`
margin-bottom: 10px;
  margin-top:100px;
	padding-right: 15px;
	padding-left: 75px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`
export const FooterWrapper=styled.span`
margin-left: auto;
margin-right:auto;

`

export const FooterLogo=styled.h2``

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 24px;
    padding:0 10px;
`;
export const LogoWrapper=styled.span`
margin-left: auto;
/* margin-right:auto; */
margin-top:auto;
`

export const FooterLinks = styled.span`
color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
    font-size: 15px;
    font-weight: 700;
    	

	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const FooterItem = styled.li`

	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;
export const FooterMenu = styled.ul`
 display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}

	> li:first-child {
		margin-left: auto;
	
  }
  /* > li:first-child {
		margin-left: auto;
	} */
`;