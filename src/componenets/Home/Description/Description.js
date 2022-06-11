import React from 'react'
import { Container, Section } from '../../../globalStyles'
import { ContentColumn, ContentRow, Heading, Img, ImgWrapper, Subtitle, TextWrapper } from './DescriptionStyles'

const Description = () => {
  return (
 <Section inverse="a" padding="30px 0 130px 0">

<ContentRow>
    
        <ContentColumn>
          <TextWrapper>
            {/* <TopLine>
         This is top line
            </TopLine> */}
            <Heading>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR 
            </Heading>
            <Subtitle>
            Located at the heart of New York City. Audiophile is the premier store for high end headphones, earphones, speakers and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. stop by our store to meet some of the fantastic people who make Audiophilethe best place to buy your portable audio equipment.            </Subtitle>
          </TextWrapper>
        </ContentColumn>

        <ContentColumn>
          <ImgWrapper>
            <Img src="./assests/image-best-gear.jpg" alt ="dd"/>
          </ImgWrapper>
        </ContentColumn>
       
      </ContentRow>



 </Section>
  )
}

export default Description