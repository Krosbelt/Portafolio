import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';

const abouts =[
    { title: "Interface Development", description: "User interfaces focused on UX/UI design", imgUrl: images.about01},
    { title: "Passionate about learning", description: "Constant training about new technologies and/or updating them to improve my coding", imgUrl: images.about02},
    { title: "Scalable code", description: "Good practices, clean code to reach project scability", imgUrl: images.about03},
    { title: "Dynamic applications", description: "I'm appasionate aboute create web interfaces", imgUrl: images.about04}
];


const Servicio = () => {
  
  return (
    <>
        <h2 className="head-text"> 
            What Do I<span>offer?</span>
        </h2>
        
        <div className="app__profiles">
            {abouts.map((about, index) => (
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
            >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
            ))}
        </div>
    </>
  );
};

export default AppWrap(
    MotionWrap(Servicio, 'app__about'),
    'services',
  );