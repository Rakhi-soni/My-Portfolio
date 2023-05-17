import React from "react";
import './Services.css';
import Card from "../Card/Card";
import heartemoji1 from "../../img/heartemoji1.png"
import glasses1 from "../../img/glasses1.png"
import humbly from "../../img/humbly.jpg"
import resume1 from "./resume1.pdf"
import {motion} from 'framer-motion';

const Services = () => {
const transition ={duretion : 1, type: 'spring'}

  return (
    <div className="services" id="Services">

      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>  I do create websites using web languages such as HTML, CSS,<br/>
           JavaScript and React that allow users to access and interact with the site.</span>
        <a href={resume1} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{background: "#abddf1"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
      <motion.div
      whileInView={{left:'14rem'}}
      initial={{left:'25%'}}
      transition={transition}
 style={{left:'21rem'}}>
        <Card
        emoji={heartemoji1}
        heading={'Web Development'}
        details={"CSS, html, javascript"}
        />
      </motion.div>
      <motion.div
      whileInView={{left:'-7rem'}}
      initial={{left:'25%'}}
      transition={transition}
      style={{left:'-1rem',top:'12rem'}}>
        <Card
        emoji={glasses1}
        heading={'Responsiveness'}
        details={"Html, Css, javaScript"}
        />
      </motion.div>
      <motion.div
      whileInView={{left:'23rem'}}
      initial={{left:'25%'}}
      transition={transition}
      style={{left:'17rem',top:'19rem'}}>
        <Card   
        emoji={humbly}
        heading={'Framework'}
        details={"Reactjs, Bootstrap"}
        />
      </motion.div>
      <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services;