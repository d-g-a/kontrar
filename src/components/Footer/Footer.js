import React from 'react';
import { useIntl } from 'react-intl';
import styles from './Footer.module.scss';

 const Footer = () => {
    const intl = useIntl();

    return (
            <ul className={styles.List}>
                <li>
                    <a 
                    href="https://www.instagram.com/kontraer.berlin/" 
                    target="_blank"
                    >
                        {intl.formatMessage({ id: "Footer.Social.Instagram"})}
                    </a>
                </li>
                <li>
                    <a 
                    href="https://www.google.com.mx/maps/place/Winsstra%C3%9Fe+53,+10405+Berlin,+Germany/@52.5347581,13.4236596,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e05d11208b5:0xbb5c485489bbdf34!8m2!3d52.5347581!4d13.4258536"
                    target="_blank"
                    >
                        {intl.formatMessage({ id: "Footer.Address"})}
                    </a>
                </li>
                <li>
                    <a 
                    href="mailto: hello@kontrar.com"
                    target="_blank"
                    >
                        {intl.formatMessage({ id: "Footer.Social.Email"})}
                    </a>
                </li>
            </ul>
    )
}

export default Footer;
