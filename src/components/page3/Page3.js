import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Page3 = () => {
    return ( 
        <Container>
           <Fade bottom delay= "400">  
            <img src={require("./1.png").default} alt="" />     
            </Fade>
            <Fade top delay= "600">  
            <img src={require("./2.png").default} alt="" />   
            </Fade>
            
        </Container>
     );
}
 
export default Page3;

const Container = styled.div`
    /* display:flex; */
    overflow: hidden;
    justify-content: center;
    background: tomato;
    height: 100vh;  
    position: relative;
    img{    
           
            width: 340px;
            height: 600px;
            &:nth-child(1){
                margin-left: 200px;
                position: relative;
                bottom: -20vh;
            }
            &:nth-child(2){
                width:290px;
                margin-left: 60px;
                position: relative;
                top: -135px;
                
            }
            
        } 

    
`;

