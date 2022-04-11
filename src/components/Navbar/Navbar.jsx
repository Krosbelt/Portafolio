import React, { useState } from 'react'

import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

import { images } from '../../constants'; 


const Navbar = () => {

    /* toggle menu */
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo logo'>
               {/*  <img src={images.Logo} alt="logo"/> */}
                <a className='.app__navbar-logo' href="/#home">Karen</a>
            </div>

            <ul className='app__navbar-links'>
                {/* Arreglo dinámico */}
                {['home', 'about', 'services', 'work', 'contact'].map((item) => (
                    <li className='app__flex pt-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* Toggle Menu */}
            <div className="app__navbar-menu">
                <HiOutlineMenuAlt3 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [1, 0] }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        
                        <ul>
                        {['home', 'about', 'services', 'work', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
