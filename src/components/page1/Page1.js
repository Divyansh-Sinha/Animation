import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Page1 = () => {
    return ( 
        <Container>
            
            <Fade bottom delay="500">

            <img src={require("./images/1.png").default} alt="" />  
                
            </Fade>

            <Fade bottom delay="700">
            <img src={require("./images/2.png").default} alt="" />
            </Fade>     
            
            
           
            
            
        </Container>
     );
}
 
export default Page1;

const Container = styled.div`
    /* display:flex; */
    justify-content: center;
    background: #FED766;
    height: 100vh;  
    
    img{    
            margin-top: 100px;
            width: 400px;
            height: 600px;
            &:nth-child(1){
                margin-left: 90px;
            }
            
        } 

    
`;

