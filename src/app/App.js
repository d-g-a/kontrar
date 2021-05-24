import {IntlProvider } from 'react-intl';
import { useState } from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Footer from '../components/Footer/Footer'
import flattenMessages from '../utils/flattenMessages';
import enMessages from '../translations/en.json';
import deMessages from '../translations/de.json';

const messages = {
  en: enMessages,
  de: deMessages
};

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleChangeLanguage = (value) => () => {
    setLanguage(value);
    localStorage.setItem('language', value);
  };

  return (
    <div className="App">
      <IntlProvider
        locale={language}
        messages={flattenMessages(messages[language])}
      >
        <Home />
        <About
        onChange={handleChangeLanguage} />
        <Footer />
      </IntlProvider>
    </div>
  );
}

export default App;
