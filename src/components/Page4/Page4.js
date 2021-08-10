import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Page4 = () => {
    return ( 
        <Container>
            
            <Fade bottom delay="500">

            <img src={require("./1.png").default} alt="" />  
                
            </Fade>

            <Fade bottom delay="500">
            <img src={require("./2.png").default} alt="" />
            </Fade>     

            <Fade top delay="500">
            <img src={require("./3.png").default} alt="" />
            </Fade> 
                
           
                <Fade right delay="500">
                <img src={require("./4.png").default} alt="" />
                </Fade>            
            
                <Fade bottom right delay="500">
                <img src={require("./5.png").default} alt="" />
                </Fade>            
            
            
           
            
            
        </Container>
     );
}
 
export default Page4;

const Container = styled.div`
    /* display:flex; */
    justify-content: center;
    background: #0D1321;
    height: 100vh;  
    position: relative;
    overflow: hidden;
    
    img{    
            margin-top: 100px;
           
            &:nth-child(1){
                /* height: 200px; */
                position: absolute;
                top: -180px;
                left: -90px;
                margin-left: 90px;
            }

            &:nth-child(2){
                width: 250px;
                height: 380px;
                position: absolute;
                left: 100px;
                bottom: 0;
            }
            &:nth-child(3){
                width: 200px;
                height: 400px;
                position: absolute;
                left: 450px;
                
            }
            &:nth-child(4){
                
                position: absolute;
                right: 0;
                top:-190px;
                
            }
            &:nth-child(5){
                
                position: absolute;
                right: 0;
                bottom:-100px;
                
            }
            
        } 

    
`;

