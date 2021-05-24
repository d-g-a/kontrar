import React from 'react'
import KontrarLogoDesktop from '../../images/KontrarLogoDesktop.svg'

const Logo = () => (
    <div>
         <img 
            src={KontrarLogoDesktop}
            alt="Konträr"
            height="120"
            />
    </div>
);

const Home = () => {
    return (
        <div>
            <Logo />
        </div>
    )
}

export default Home;