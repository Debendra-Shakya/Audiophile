import React from 'react'
// import { Button} from '../../globalStyles'
import { Image, Info, Title,CategoriesButton,CateItemContainer } from './CategoriesStyles'



const CategoriesItem = ({item}) => {
  return (
    <CateItemContainer>

        <Image src={item.img}/>
       <Info>
        <Title>{item.title}</Title>
        <CategoriesButton>SHOP  
           <span style={{color:"red"}}>
           {'  >'} 
           </span>
          
            
            
            </CategoriesButton>

       </Info>
       
        
    </CateItemContainer>
  )
}

export default CategoriesItem