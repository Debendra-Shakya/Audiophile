import styled from "styled-components";
import { Button, MainHeading } from "../../globalStyles";

export const Zx9Image = styled.img`
  height: 65vh;
  max-width: 100%;
  display: inline-block;
  object-fit: cover;
  vertical-align: bottom;
  padding-right: 0;
  /* max-height: 600px; */
  /* padding-left: 80px; */
  margin-top: 100px;

  /* padding-right: 0;
	 border: 0;
	max-width: 100%;
	vertical-align: bottom;
	display: inline-block;
	object-fit: cover;
	 max-height: 600px;
	z-index: 1;  */
`;

export const Zx9Wrapper = styled.div`
  height: 75vh;
  width: 75%;
  margin: auto;
  background: rgba(216, 124, 73, 0.8);
  border-radius: 20px;
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
`;

// export const Zx9tHeading=styled.h2`
// margin-bottom: 24px;
// 	font-size: 3rem;
// 	line-height: 1.1;
// 	font-weight: 600;
// 	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

// 	@media screen and (max-width: 768px) {
// 		text-align: center;
// 	}
// `
export const Zx9Text = styled.div`
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: left;
  color: #fff;
  opacity: 0.3;
  margin-left: 650px;
  padding-right: 20vh;
  margin-bottom: 20px;
`;

export const Zx9Heading = styled(MainHeading)`
  text-align: left;
  z-index: 2;
  position:absolute;
  padding-left: 650px;
  /* margin-top: -500px; */
  color: black;
  width:100%;
  /* font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	margin-bottom: 1rem;
	color: black;
	width: 100%;
	letter-spacing: 5px;
	text-align: left;
    opacity: 0.3; */

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  ${MainHeading}
`;
export const Zx9Button = styled(Button)`
  margin-left: 650px;
  background-color: black;
  &:hover {
    color: black;
    background-color: white;
  }
  ${Button}
`;
