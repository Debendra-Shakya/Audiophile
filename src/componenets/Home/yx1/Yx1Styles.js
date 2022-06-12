import styled from 'styled-components'


export const Wrapper=styled.span`
display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 3rem;
	grid-gap: 5rem;
   /* background-color: white; */
   
   /* border-radius: 50px; */
   /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */

   @media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		margin-top:3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const Yx1Image=styled.img`
	width: 100%;
	height:100%;
	/* vertical-align: middle; */
	/* display: inline-block; */
	object-fit: fill;
	/* max-height: 700px; */
	/* z-index: 1; */
    border-radius: 20px;
    /* overflow:hidden; */

`

export const TextWrapper = styled.div`
	/* max-width: 540px; */
	max-height:540px;
	/* padding-top: 0; */
    /* position:relative; */
    background-color: #f1f1f1;
    padding: 40px;
    border-radius: 20px;
    /* height:33vh; */
    /* text-align: left; */
	z-index: 100;
    
	/* @media screen and (max-width: 1100px) {
position: fixed;

	} */


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
		text-align: left;
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