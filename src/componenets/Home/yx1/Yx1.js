import React from 'react'
import { Column, Container, Row, Section } from '../../../globalStyles'
import { ImgWrapper, TextWrapper, Wrapper, Yx1Column, Yx1Image, Yx1Row ,Yx1Wrapper, Heading,ContentButton} from './Yx1Styles'

const Yx1 = () => {
  return (
    
    <Section padding="0px 0 0 0"inverse="d">
     
        
        
        <Yx1Row>
        <Yx1Column>
          <ImgWrapper>

        <Yx1Image src="./assests/image-earphones-yx1.jpg"/>
          </ImgWrapper>
        </Yx1Column>
        <Yx1Column>
        <TextWrapper>
            {/* <TopLine>
         This is top line
            </TopLine> */}
            <Heading>
           YX1 EARPHONES
            </Heading>
            <ContentButton>
            SEE PRODUCT
            </ContentButton>
          </TextWrapper>
        </Yx1Column>

      </Yx1Row>
      
    </Section>
  )
}

export default Yx1