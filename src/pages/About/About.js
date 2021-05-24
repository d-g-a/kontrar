import React from 'react'
import { useIntl } from 'react-intl';
import styles from './About.module.scss'

 const About = (props) => {
    const { onChange } = props;
    const intl = useIntl();

    return (
        <div className={styles.About}>
            <div className={styles.Language}>
                <button
                type="button"
                onClick={onChange('en')}
                >
                    {intl.formatMessage({ id: 'en' })}
                </button>
                /
                <button
                type="button"
                onClick={onChange('de')}
                >
                    {intl.formatMessage({ id: 'de' })}
                </button>
            </div>
            <h2>
                {intl.formatMessage({ id: 'About.Title' })}
            </h2>
            <p>
                {intl.formatMessage({ id: 'About.Text' })}
            </p>
        </div>
    )
}

export default About;
