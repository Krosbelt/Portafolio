import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'services', 'about me', 'work', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? {background: '#3B14BAC'} : {}}
                >
                </a>
                
            ))}
        </div>
    )
}

export default NavigationDots
