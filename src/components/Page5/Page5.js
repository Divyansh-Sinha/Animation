import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Page5 = () => {
    return ( 
        <Container>

            <Fade top left delay= "400">  
            <img src={require("./1.png").default} alt="" />     
            </Fade>
              
            
            
        </Container>
     );
}
 
export default Page5;

const Container = styled.div`
    /* display:flex; */
    overflow:hidden;
    justify-content: center;
    background: #ffb703;
    height: 100vh;  
    position: relative;
    img{    
           
            
            width: 100%;
            position: relative;
            top: -50px;
            
        } 

    
`;

