import styled from "styled-components"
export const Image=styled.img`
border-radius: 20px;
object-fit: contain;
width: 100%;
/* row-gap: 200px; */
`

export const ImageOne=styled.img`
border-radius: 20px;
object-fit: cover;
/* row-gap: 200px; */

`


export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px 25px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;

	/* @media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	} */
`;

export const ContentColumn = styled.div`
	margin-bottom: 10px;
  margin-top:100px;
	padding-right: 15px;
	padding-left: 75px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
 
	@media screen and (max-width: 768px) {
		/* max-width: 100% !important;
		flex-basis: 100%; */
		/* justify-content: left;
		align-items: center; */
	}
`;