import styled from 'styled-components'
import { Column, Row } from '../../../globalStyles'

export const Yx1Row= styled(Row)`
flex:flex;
margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`
export const Yx1Column=styled(Column)`
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
export const ImgWrapper = styled.div`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const Yx1Image=styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
    border-radius: 20px;

`
export const Wrapper=styled.span`
display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin-top: 3rem;
	grid-gap: 5rem;
   background-color: #f1f1f1;
   border-radius: 10px;
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

   @media screen and (max-width: 1100px) {
		/* grid-template-columns: repeat(1, 1fr); */
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
export const TextWrapper = styled.div`
	/* max-width: 540px; */
	/* padding-top: 0; */
    /* position:relative; */
    background-color: #f1f1f1;
    padding: 40px;
    border-radius: 20px;
    height:40vh;
    text-align: left;
    



	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const Heading = styled.h2`
	margin-top: 75px;
    margin-bottom: 50px;
  /* padding-right: 100px; */
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: black;

    

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const ContentButton = styled.button`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

	border-radius: 4px;
	white-space: nowrap;
    padding:10px 20px;
	/* padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')}; */
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	cursor: pointer;
	position: relative;
	overflow: hidden;
    color:black;
    border-color:black;
  /* border:none; */

	&:before {
		background: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color:black;
    background:white;
	}
`;