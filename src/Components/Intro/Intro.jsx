import React from "react";
import './Intro.css';
import github from '../../img/github.jpg';
import linkedin from '../../img/linkedin.jpg';
import insta from '../../img/insta.jpg';
import vec11 from '../../img/vec11.png';
import vec2 from '../../img/vec2.jpg';
import mypic1 from '../../img/mypic1.png';
import FloatingDiv from "../FloatingDiv/Floating.jsx";
import crown1 from '../../img/crown1.png';
import thumb1 from '../../img/thumb1.png';
import glassemoji from '../../img/glassemoji.jpg';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition = { duration: '2', type: 'spring' };

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Rakhi Soni</span>
                    <span>Frontend Developer with
                        experience in web designing and
                        development, producting the
                        Quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/Rakhi-soni"> <img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/rakhi-soni-401b19264/"><img src={linkedin} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                </div>

            </div>
            <div className="i-right">
                <img src={vec11} alt="" />
                <img src={vec2} alt="" />
                <img src={mypic1} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassemoji} alt="" />

                <motion.div
                   initial={{top:'-4%',left:'45%'}}
                whileInView={{left:'68%'}}
                transition={transition}

                style={{ top: '-4%', left: '68%' }}
                className='floating-div'
                >
                    <FloatingDiv className="animate" image={crown1} />
                </motion.div>

                <motion.div
                initial={{top:'18rem',left:'20rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{ top: '18rem', left: '0rem' }}
                className='floating-div'
                >
                    <FloatingDiv image={thumb1} />
                </motion.div>
                {/* blurr div */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: '#abddf1', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro;