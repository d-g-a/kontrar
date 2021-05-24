import React from 'react';
import KontrarLogoDesktop from '../../images/KontrarLogoDesktop.svg';
import KontrarLogoMobile from '../../images/KontrarLogoMobile.svg';
import styles from './Home.module.scss';


const Logo = () => (
    <div>
         <img 
            src={window.screen.width <= 600 ? KontrarLogoMobile : KontrarLogoDesktop}
            alt="Konträr"
            height={window.screen.width <= 600 ? 240 : 150}
            />
    </div>
);

const Home = () => {
    return (
        <div className={styles.Home}>
            <Logo className={styles.Logo} />
        </div>
    )
}

export default Home;