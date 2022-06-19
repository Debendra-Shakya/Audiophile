import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../../globalStyles'
import { ContentButton, Heading, TextWrapper, Wrapper, Yx1Image } from './Yx1Styles'

const Yx1 = () => {
  return (
    <Section smPadding="0"inverse='a' padding='0'>
        <Wrapper>
        <Yx1Image src="./assests/image-earphones-yx1.jpg"/>
        <TextWrapper>
            <Heading>
           YX1 EARPHONES
            </Heading>
            <Link to='/products/YX1 WIRELESS EARPHONES'>
            <ContentButton>
            SEE PRODUCT
            </ContentButton>
            </Link>
          </TextWrapper>
        </Wrapper>
    </Section>
  )
}

export default Yx1