import React from 'react';
import { useTranslation } from 'react-i18next';
// You might want to import a 90s-style GIF, place it in src/assets
// import underConstructionGif from './assets/under_construction.gif';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <div className="header-bar">
        <span>{t('name')} - {t('welcome')}</span>
      </div>

      <div className="language-switcher" style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>

      <div className="section">
        <h2>{t('about')}</h2>
        <p>
          Hello! I'm Felipe Estuardo Pasache Rivas, a passionate developer with expertise in various technologies.
          I enjoy building robust backend systems and engaging frontend experiences.
          (You can expand this "About Me" section with more details about your experience, philosophy, etc.)
        </p>
        {/* <img src={underConstructionGif} alt="Under Construction" className="under-construction" /> */}
      </div>

      <div className="section contact-info">
        <h2>{t('contact')}</h2>
        <p><strong>Phone 1:</strong> {t('phone1')}</p>
        <p><strong>Phone 2:</strong> {t('phone2')}</p>
        <p><strong>Email:</strong> <a href={`mailto:${t('email')}`}>{t('email')}</a></p>
      </div>

      <div className="section">
        <h2>{t('skills')}</h2>
        <p>{t('skillsDetails')}</p>
        {/* You can parse skillsDetails and display them as individual tags if you want */}
        {/* Example if skillsDetails was an array: */}
        {/* <div className="skills-list">
          {t('skillsArray', { returnObjects: true }).map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div> */}
      </div>

      <div className="section">
        <h2>{t('projects')}</h2>
        <p>This section is currently under development. Please check back later for exciting projects!</p>
        {/* You'll add your project components here later. */}
      </div>

      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.8em', color: '#a0a0a0' }}>
        <p>© 2025 Felipe Estuardo Pasache Rivas. All rights reserved.</p>
        <p>Built with React in the 90s style.</p>
      </footer>
    </div>
  );
}

export default App;