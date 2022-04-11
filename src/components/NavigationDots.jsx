import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'services','skills','work', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? {background: 'purple'} : {}}
                >
                </a>
                
            ))}
        </div>
    )
}

export default NavigationDots
