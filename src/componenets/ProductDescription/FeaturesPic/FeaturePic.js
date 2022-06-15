import React from 'react'
import { Container, Section } from '../../../globalStyles'

import { ContentColumn, ContentRow, Image, ImageOne } from './FeaturePicStyles'

const FeaturePic = () => {
  return (
    <Section padding="0" inverse="a" smPadding="0">

        <ContentRow>
           <ContentColumn>
              
               <ContentRow>
                  <Image src='./assests/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg' />
               </ContentRow>
               <ContentRow>
               <Image src='./assests/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg' />
               </ContentRow>
           </ContentColumn>
           <ContentColumn>
           <Image src='./assests/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg' />
               </ContentColumn>

        </ContentRow>
 
    </Section>
  )
}

export default FeaturePic