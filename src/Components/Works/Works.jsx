import React from "react";
import './Works.css';
import js2 from "../../img/js2.png";
import reac from "../../img/reac.png";
import html1 from "../../img/html1.webp";
import css1 from "../../img/css1.png";
import bootstrap from "../../img/bootstrap.png";
import { motion } from 'framer-motion';


const Works = () => {


    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>Skills</span>
                <span>Css,Html,JS,React<br/>jQuery,bootstrap</span>
                <span>  I do create websites and applications using web languages such as HTML, CSS,
                    <br />
                    JavaScript and Reactjs that allow users to access and interact with the site.
                    <br />
                    also are responsible for making the web design very
                    <br />
                    responsive and optimized for smartphones,tablets and full screen devices.
                </span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{ background: "#abddf1" }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={js2} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={reac} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={html1} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={css1} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={bootstrap} alt="" />
                    </div>
                </motion.div>
                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    )
}

export default Works;