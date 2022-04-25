import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'

import './About.scss'
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs'

const About = () => {
    return (
        <>
            <h2 className="head-text"> 
                About<span> me</span>
            </h2>
            <div className="about">
                <div className='app__about-text'>
                    <p>
                        Hi, my name is Karen Rosales, I'm a full stack web developer focused on Frontend, currently studying at the Educamas bootcamp, carrying out projects individually and with development teams.
                        <br/>
                        <br/>
                        In this bootcamp I have developed projects using languages  like HTML, CSS, Javascript, React Js, with the MERN stack and creating mockups with Figma, also basic knowledge in relational databases with mysql and non-relational databases with mongoDB.
                        <br/>
                        <br/>
                        I am passionate about development and every day I try to learn new things, I love reading and I rescue street animals.
                    </p>
                    <div>
                        <a href='https://drive.google.com/file/d/1QkHG8MTXrtQosPvR_9PhZTV6uyujbhle/view?usp=sharing' target='_blank' className='button' style={{width: 200}}>
                            Download CV 
                            <span><BsFileEarmarkArrowDownFill /></span>
                        </a>
                    </div>
                </div>
                <div className='app__about-img'>
                    <img src={images.profile} alt="" style={{width: 200}}/>
                </div>
            </div> 
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
  );
