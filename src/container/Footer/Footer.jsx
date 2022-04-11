import { motion } from 'framer-motion';
import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {


     return (
        <>
            <h2 className="head-text">
                Contact me
            </h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:elcorreoquequieres@correo.com?Subject=Hello,%20can%20we%20talk%20about" target="_blank" rel='noreferrer'>Contact me by email</a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="https://api.whatsapp.com/send?phone=+573006904174&text=Hello, Can we talk?" target="_blank" rel='noreferrer'>Chat with me</a>
                </div>
            </div>
            
            <div className='scroll__down'>
               
                    <motion.button
                        whileHover={{ scale: 1.1,}}
                        className='app__button-footer'
                        
                    >
                        <a href="home" ><BsFillArrowUpCircleFill /></a>
                    </motion.button>
                
            </div>
        

            <div className="copyright">
                    <p className="p-text">@2022 KR</p>
                    <p className="p-text">All rights reserved</p>
            </div>
            
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    'contact',
)
