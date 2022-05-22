import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
export default function Profile() {
  return (
    <>
      <div className='profile-container'>
        <div className='profile-parent'>
          <div className='profile-details'>
            <div className='colz'>
              <div className='colz-icon'>
                <a href='https://www.facebook.com/avaneesh.maurya.7'>
                  <i className='fab fa-facebook-square'></i>
                </a>
                <a href='https://www.instagram.com/_avaneesh/'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://www.linkedin.com/in/avanees-maurya-151132184/'>
                  <i className='fab fa-linkedin'></i>
                </a>
                <a href='https://github.com/AvaneesMaurya'>
                  <i className='fab fa-github-square'></i>
                </a>
              </div>
            </div>
            <div className='profile-details-name'>
              <span className='primary-text'>
                Hello, I'm
                <span className='highlighted-text'> Avanees Maurya </span>
              </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      'Software Engineer',
                      2000,
                      'Frontend Developer',
                      2000,
                      'Web Developer',
                      2000,
                    ]}
                  />
                </h1>
                <span className='profie-role-tagline'>
                  I'm Software Engineer ,Who is Passinate About DevOps
                  Engineering{' '}
                </span>
              </span>
            </div>
            <div className='profile-options'>
              <a href='#contactme' className='btn primary-btn'>
                Hire Me
              </a>
              <a href='Avanees Maurya.pdf' download='Avanees Maurya.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
          <div className='profile-picture'>
            <div className='profile-picture-background'></div>
          </div>
        </div>
      </div>
    </>
  );
}
