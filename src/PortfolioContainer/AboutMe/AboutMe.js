import React from 'react';
import './AboutMe.css';
import ME from '../../assets/AboutMe/ME1.jpg';
export default function AboutMe() {
  return (
    <>
      <div className='row justify-content-center shadow-lg my-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 d-flex aling-item-center justify-content-center'>
          <img
            src={ME}
            className='about-me-img'
            style={{ marginTop: '20px' }}
          />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
          <span className='some-text-about-me'>
            I'm highly organized and hard-working individual Currently Workig As
            software Engineer an looking to enhance my knowledge about new and
            emerging trends in the IT sector. Strong Professional with
            experience Willing to be an asset for an organization
          </span>
          <span className='few-highlights'>
            <span className='few-text'>Skills :-</span>
            <span className='few-list'>
              <ul>
                <li>Basic Of Microsoft Azure (Certified AZ 900)</li>
                <li>Basic Of AWS Cloud</li>
                <li>Core Java</li>
                <li>Jakarta enterprise (j2EE)</li>
                <li>html</li>
                <li>css</li>
                <li>React.js</li>
                <li>SVN</li>
              </ul>
            </span>
          </span>
        </div>
        <div className='counts container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 '>
              <div className='count-box'>
                <i className='	fas fa-briefcase'></i>
                <span data-toggle='counter-up'>2</span>
                <p>Internships</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
              <div className='count-box'>
                <i className='fas fa-award'></i>
                <span data-toggle='counter-up'>6</span>
                <p>Certifications</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
              <div className='count-box'>
                <i className='fa fa-university'></i>
                <span data-toggle='counter-up'>1</span>
                <p>Organization</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
              <div className='count-box'>
                <i className='fas fa-laptop-code'></i>
                <span data-toggle='counter-up'>4</span>
                <p>Projects</p>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
