import React from 'react'
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a 
                    href="https://github.com/Krosbelt"
                    target='_blank'
                    rel='noreferrer'
                >
                    <AiFillGithub />
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/karen-vanesa-rosales-beltran-88b042168/"
                    target='_blank'
                    rel='noreferrer'
                >
                    <AiFillLinkedin />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;
