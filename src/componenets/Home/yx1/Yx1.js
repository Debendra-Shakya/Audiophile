import React from 'react'
import { Section } from '../../../globalStyles'
import { ContentButton, Heading, TextWrapper, Wrapper, Yx1Image } from './Yx1Styles'

const Yx1 = () => {
  return (
    <Section smPadding="0"inverse='a'>
        <Wrapper>
        <Yx1Image src="./assests/image-earphones-yx1.jpg"/>
        <TextWrapper>
            <Heading>
           YX1 EARPHONES
            </Heading>
            <ContentButton>
            SEE PRODUCT
            </ContentButton>
          </TextWrapper>
        </Wrapper>
    </Section>
  )
}

export default Yx1