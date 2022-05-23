import React from 'react'
import { Container, Section } from '../../globalStyles'
import { ImageContainer, Zx7Button, Zx7Heading, Zx7Image, ZX7Section } from './Zx7Styles'

const Zx7 = () => {
  return <Section inverse="a">
    <ImageContainer>
    <Zx7Image src="./assests/image-speaker-zx7.jpg" />
    </ImageContainer>

 <Container >
 <Zx7Heading>
            ZX7 SPEAKER
  </Zx7Heading>
  <Zx7Button>SEE PRODUCT</Zx7Button>

 </Container>
  </Section>
}

export default Zx7