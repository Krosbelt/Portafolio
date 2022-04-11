import { motion } from 'framer-motion';
import React from 'react'
import { AiFillMessage} from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter' 

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'

import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div id='home' className="home">
            <div className='text' >
                <motion.div
                    whileInView={{x: [-100,0], opacity: [0,1]}}
                    transition={{duration: 0.5}}
                    className="app__header-info"
                >
                <h1>Hi, I'm Karen</h1>

                <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
        Frontend {' '}
        <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'Mobile', 'UX/UI']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={600}
          
          />
        </span>
      </h1>
                <a href="/#contact" className='button'>
                    Contact me!
                    <span><BsBoxArrowInRight /></span>
                </a>

                </motion.div>
            </div>

            <div className='right'>
                <img src={images.profile} alt="" />
                <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-cicles"
                >
                {[images.javascript, images.react, images.css].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
                </motion.div>
            </div>
            
        </div>
        
    )
}

export default AppWrap(
 Header, 'home'
)
