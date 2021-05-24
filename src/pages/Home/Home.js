import React from 'react';
import KontrarLogoDesktop from '../../images/KontrarLogoDesktop.svg';
import styles from './Home.module.scss';


const Logo = () => (
    <div>
         <img 
            src={KontrarLogoDesktop}
            alt="Konträr"
            height="140"
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