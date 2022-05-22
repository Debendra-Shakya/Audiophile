import React from 'react'
import { Container } from '../../globalStyles'
import { Zx7Button, Zx7Heading, Zx7Image, ZX7Section } from './Zx7Styles'

const Zx7 = () => {
  return <ZX7Section>
 <Zx7Image src="./assests/image-speaker-zx7.jpg" />
 <Container>
 <Zx7Heading>
            ZX7 SPEAKER
  </Zx7Heading>
  <Zx7Button>SEE PRODUCT</Zx7Button>

 </Container>
  </ZX7Section>
}

export default Zx7