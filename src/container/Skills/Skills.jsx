import { motion } from 'framer-motion';
import React from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper'
import './Skills.scss'

const languages = [
    {name: 'Figma', icon: images.figma, percent: '80%'},
    {name: 'Git', icon: images.git, percent: '75%'},
    {name: 'Html', icon: images.html, percent: '90%'},
    {name: 'Css', icon: images.css, percent: '80%'},
    {name: 'JavaScript', icon: images.javascript, percent: '70%'},
    {name: 'React', icon: images.react, percent: '65%'},
    {name: 'MySql', icon: images.mysql, percent: '45%'},
    {name: 'MongoDB', icon: images.mongodb, percent: '45%'},
];

const Skills = () => {

    return (
        <>
            {/* Title */}
            <h2 className="head-text">My skills</h2>

            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {/* skills map */}
                    {languages.map((index) => (
                        <motion.div
                            whileInView={{opacity: [0,1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app__flex"
                            key={index.name}
                        >
                            <div className="app__flex" style={{backgroundColor: index.bgColor}}>
                                <img src={index.icon} alt={index.name}/>
                            </div>
                            <p className='p-text'>{index.name}</p>
                            <p className='p-text'>{index.percent}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
        
    );
}

export default AppWrap(
    Skills, 'skills'
   )
