import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Page2 = () => {
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
 
export default Page2;

const Container = styled.div`
    /* display:flex; */
    overflow:hidden;
    justify-content: center;
    background: #009fb7;
    height: 100vh;  
    position: relative;
    img{    
           
            width: 290px;
            height: 500px;
            &:nth-child(1){
                margin-left: 180px;
                position: relative;
                bottom:-41vh;
            }
            &:nth-child(2){
                top:-90px;
                height: 500px;
                margin-left: 80px;
                position: relative;
                
            }
            
        } 

    
`;

