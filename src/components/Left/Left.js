import React from 'react';
import styled from 'styled-components';
import svg from "./svg with paths.svg"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const Left = () => {
    return ( 
        <Container>
          <Fade delay="800">

          <SvgComp>
            <Fade>
          <img src={svg} alt=""></img>
          </Fade>
        
          <SvgText>
          <Flip top delay="1000">
            <h1>25M+ Downloads</h1>
            
            <p>on appstore & google playstore</p>
            </Flip>
          </SvgText>
       
          </SvgComp>
          
          <Text>
          <Slide left delay="1000">
            <img src={require("./best.png").default} alt="" />
            <h1>ABC 123</h1>
            <p>We are the best web development company in the world</p>
            </Slide>
          </Text>
          </Fade>
        </Container>
     );
}
 
export default Left;

const Container = styled.div`
  width: 100%;
  height:100%;
  position: relative;
  z-index: 10;
`;

const SvgComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  right: -155px;
  height: 380px;
  width: 380px;
  z-index: 5;
  z-index: 10;

  img{
    width: 350px;
    height: 350px;
  }

`;

const SvgText = styled.div`
    position: absolute;
    width: 500px;
    left: -250px;


    color: white;

    h1{
      font-size: 60px;
      width: 100%;
    }

    p{
      width: 100%;
      font-size:24px;
      text-align: end;
    }


`;

const Text = styled.div`
    position: absolute;
    z-index: 5;
    top: 380px;
    left: 70px;

    color: white;

    width: 250px;


    img{
      width: 100%;

    }

    h1{
      font-size: 48px;
      margin: 16px 0;
    }

    

`;