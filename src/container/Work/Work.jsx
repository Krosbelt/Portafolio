import React, { useState} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion';
import { images } from '../../constants';


import { AppWrap, MotionWrap } from '../../wrapper'
import './Work.scss'



const worksProject =[
    { title: "Landing Page Starbucks", description: "Landing using Html, css y JavaScript", projectLink: "https://krosbelt.github.io/Landing-Page-Starbucks/", codeLink:"https://github.com/Krosbelt/Landing-Page-Starbucks" ,imgUrl: images.starbucks, tags: "Html + Css + JavaScript" },
    { title: "QR Generator", description: "QR generator using Html, Css and JavaScript", projectLink: "https://krosbelt.github.io/QR-Genrator/", codeLink:"https://github.com/Krosbelt/QR-Genrator" ,imgUrl: images.qrproject, tags: "React JS" },
    { title: "App Todo stack mern", description: "App todo using stack mern", projectLink: "https://app-todo-mongo-db-frontend.vercel.app/", codeLink:"https://github.com/Krosbelt/App-todo-MongoDB" ,imgUrl: images.apptodo, tags: "Stack Mern" },
]


const Work = () => {

    const [activeFilter, setActiveFilter] = useState('All')
    const [animatedCard, setAnimatedCard] = useState({ y:0 , opacity: 1 });
    const [filterWork, setFilterWork] = useState(worksProject);


    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimatedCard([{y:100, opacity:0}]);

        setTimeout(() => {
            setAnimatedCard([{y:0, opacity:1}]);

            if (item === 'All') {
                setFilterWork(worksProject);
            } else {
                setFilterWork(worksProject.filter((work) => work.tags.includes(item)));
            }
        }, 500)
    }

    return (
        <>
            <h2 className='head-text'>My projects</h2>
            
            <div className="app__work-filter">
                {['Html + Css', 'Html + Css + JavaScript', 'React Js', 'Stack Mern', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animatedCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={work.imgUrl} alt={work.title}/>

                            <motion.div
                                whileHover={{opacity: [0,1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className= "app__work-hover app__flex"
                            >
                                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                                    <motion.div
                                        whileInView={{scale: [0,1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className= "app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                                    <motion.div
                                        whileInView={{scale: [0,1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className= "app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">
                                {work.title}
                            </h4>
                            <p className="p-text" style={{marginTop: 10}}>
                                {work.description}
                            </p>
                            
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
  );

   
  
