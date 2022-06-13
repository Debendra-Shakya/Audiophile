import styled from "styled-components"

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 960px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled.div`
	margin-bottom: 10px;
  /* margin-top:100px; */
	/* padding-right: 15px; */
	/* padding-left: 75px; */
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 960px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	/* max-width: 540px; */
	/* padding-top: 0; */

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
	margin-bottom: 35px;
	width: 95%;
  /* padding-right: 100px; */
  padding-left: 12px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: black;
    > span {
        color:#d87c49;
    }

	@media screen and (max-width: 960px) {
		text-align: center;
		

	}

`;

export const Subtitle = styled.p`
	/* max-width: 440px; */
	margin-bottom: 35px;
	line-height: 24px;
	padding-left: 12px;
	color:black;
    word-spacing: 1.3px;
    letter-spacing: 1px;
    font-size: large;
   font-weight:700 ;
  /* opacity:0.6; */
  /* padding-right: 100px; */
  @media screen and (max-width: 960px) {
		text-align: center;
		margin: 0 70px;
	}
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: 'flex-end';
	/* max-height: 700px; */
	justify-content: center;
	position: relative;
`;

export const Img = styled.img`
	/* padding-right: 0; */
	/* border: 0; */
	max-width: 100%;
	/* vertical-align: middle; */
	/* display: inline-block; */
	object-fit: cover;
	/* max-height: 700px; */

	z-index: 1;
    border-radius: 20px;
`;