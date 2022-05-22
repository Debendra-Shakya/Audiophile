import React from 'react'
// import { Button} from '../../globalStyles'
import { Image, Info, Title,CategoriesButton,CateItemContainer, Wrapper } from './CategoriesStyles'



const CategoriesItem = ({item}) => {
  return (
    <CateItemContainer>

        <Image src={item.img}/>
        {/* <Wrapper> */}

       <Info>
        <Title>{item.title}</Title>
        <CategoriesButton>SHOP  
           <span style={{color:"red"}}>
           {'  >'} 
           </span>
          
            
            
            </CategoriesButton>

       </Info>
       
        {/* </Wrapper> */}
        
    </CateItemContainer>
  )
}

export default CategoriesItem