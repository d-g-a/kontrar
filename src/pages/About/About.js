import React from 'react'
import { useIntl } from 'react-intl';

 const About = (props) => {
    const { onChange } = props;
    const intl = useIntl();

    return (
        <div>
            <button
            type="button"
            onClick={onChange('en')}
            >
                {intl.formatMessage({ id: 'en' })}
            </button>
            <button
            type="button"
            onClick={onChange('de')}
            >
                {intl.formatMessage({ id: 'de' })}
            </button>
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
