import './App.css';
import Home from './PortfolioContainer/Home/Profile';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Certifications from './PortfolioContainer/Certifications/Certifications';
import { useState } from 'react';
function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className='App'>
      <div className='navbar-option-mobile'>
        <div className='faReorder' onClick={() => setOpenNav(!openNav)}>
          <i className='fa fa-reorder' />
        </div>
      </div>
      <nav
        className={
          openNav
            ? 'd-flex flex-rows transtion-all navbar-fixed-new bg-new  py-5'
            : 'd-flex flex-rows transtion-all navbar-new bg-new  py-5 '
        }
      >
        <span className='brand-name'> AVANEES MAURYA</span>
        <div className='d-flex flex-rows'>
          <a href='#home' className='mx-4 nav-items'>
            {' '}
            Home
          </a>
          <a href='#AboutMe' className='mx-4 nav-items'>
            {' '}
            About Me
          </a>
          <a href='#Resume' className='mx-4 nav-items'>
            {' '}
            Resume
          </a>
          <a href='#Certifications' className='mx-4 nav-items'>
            {' '}
            Certifications
          </a>
          <a href='#contactme' className='mx-4 nav-items'>
            {' '}
            Contact Me{' '}
          </a>
        </div>
      </nav>

      <div className='herosection  py-5' id='home'>
        <Home />
      </div>
      <div className='about-me-section aboutme-inside my-5' id='AboutMe'>
        <div className='d-flex flex-column'>
          <span className='about-me-text'> About me</span>
          <span className='why-text-sub'> Why choose me ?</span>
          <AboutMe />
        </div>
      </div>

      <div className='resume-outer-section d-flex flex-column' id='Resume'>
        <span className='about-me-text'> Resume</span>
        <span className='why-text-sub'>My formal Bio Details</span>

        <Resume />
      </div>
      <div className='testmonials-part my-2' id='Certifications'>
        <div className='testmonials-inner-part d-flex flex-column'>
          <span className='about-me-text'> Certificates</span>
          <span className='why-text-sub mb-5'>My Achievement</span>
        </div>
        <Certifications />
      </div>

      <div className='contact-me-part' id='contactme'>
        <div className='relative-bg'></div>
        <div className='contact-inner-part d-flex flex-column'>
          <span className='about-me-text'> Contact Me</span>
          <span className='why-text-sub mb-5'>Lets Keep in Touch</span>
        </div>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
