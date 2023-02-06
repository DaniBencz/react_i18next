import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  hu: { nativeName: 'Magyar' }
};

function App() {
  const { i18n, t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

          {/* Language Switcher */}
          {Object.keys(lngs).map(lng => (
            <button type='submit' key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng} >
              {lngs[lng].nativeName}
            </button>
          ))}

        </div>
        <p>

          {/* using the <Trans> tag */}
          <Trans i18nKey="description">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          {/* using the t() method */}
          {t('learn')}

        </a>
      </header>
    </div>
  );
}

export default App;
