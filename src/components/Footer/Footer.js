import React from 'react';
import { useIntl } from 'react-intl';

 const Footer = () => {
    const intl = useIntl();

    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.instagram.com/kontraer.berlin/" target="_blank">{intl.formatMessage({ id: "Footer.Social.Instagram"})}</a>
                </li>
                <li>
                    {intl.formatMessage({ id: "Footer.Address"})}
                </li>
                <li>
                    <a href="mailto: hello@kontrar.com">{intl.formatMessage({ id: "Footer.Social.Email"})}</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
