import './Resume.css';
import { RiPlantFill } from 'react-icons/ri';
import {
  FaNewspaper,
  FaAws,
  FaLightbulb,
  FaDatabase,
  FaTheaterMasks,
  FaMusic,
} from 'react-icons/fa';
export default function Interests() {
  return (
    <>
      <div className='interests containers  mx-2 my-4'>
        {/* <div className='section-title'>
          <h2>Interests</h2>
        </div> */}

        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='icon-box'>
              <FaNewspaper
                style={{
                  color: '#ffbb2c',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Research</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <FaAws
                style={{
                  color: '#5578ff',
                  fontSize: '2.3rem ',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Cloud</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <FaLightbulb
                style={{
                  color: '#e80368',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Problem Solving</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-lg-0'>
            <div className='icon-box'>
              <FaDatabase
                style={{
                  color: '#e361ff',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Database</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <RiPlantFill
                style={{
                  color: '#47aeff',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Gardening</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <FaTheaterMasks
                style={{
                  color: '#ffa76e',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Movies</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <FaMusic
                style={{
                  color: '#11dbcf',
                  fontSize: '2.3rem',
                  marginRight: '0.5rem',
                }}
              />
              <h3>Music</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
