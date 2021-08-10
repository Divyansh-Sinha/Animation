import styled from "styled-components";

import "./style.css";
import Moon from "../images/Moon.jpg";
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";
import Page3 from "./page3/Page3";
import Left from "./Left/Left";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";


const Hero = () => {
  return (
    <section>
      <container>
        <div className="columnLeft">
          <Left></Left>
        </div>
        <div className="columnRight">
          <Zoom>
            <Page1/>
          </Zoom>
          <Zoom>            
         <Page2/>
          </Zoom>
         <Fade>
         <Page3/>
         </Fade>
         <Fade>
           <Page4/>
         </Fade>
         <Fade>
           <Page5/>
         </Fade>
         
        </div>
      </container>
    </section>
  );
};

export default Hero;
