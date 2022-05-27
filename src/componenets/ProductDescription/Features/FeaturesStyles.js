import styled from "styled-components"

export const FeatureHeading=styled.h2`
font-size: 48px;
`
export const ContentRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
justify-content: space-around;

@media screen and (max-width: 768px) {
    flex-direction: column-reverse;
}
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
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
}
`;

export const FeatureText = styled.p`
font-size: clamp(0.9rem, 1vw, 2rem);
	margin-bottom: 1rem;
    margin-top:2rem;
	color: #000;
	width: 100%;
	text-align: left;
    /* opacity: 0.3; */
`;

// export const FeatureRow = styled.div`
// 	display: flex;
// 	flex-flow: row;
// 	/* justify-content: left; */
// 	align-items: center;
// 	background-color: #f1f1f1;
// 	padding: 10px;
// 	box-shadow: 0 0 32px 8px #d0d0d0;
// 	border-radius: 20px;
// `;

export const FeatureRow = styled.div`
	display: flex;
	flex-flow: row;
	/* justify-content: left; */
	align-items: center;
	
	padding: 10px;

`;


export const Title=styled.p`

font-weight: 900;
font-size: 24px;
/* margin-left: auto; */
margin-right:auto;
`
export const CountText=styled.p`
padding-right: 20px;
`