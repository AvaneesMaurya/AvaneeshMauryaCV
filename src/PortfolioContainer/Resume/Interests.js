import './Resume.css';
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
              <i className='fas fa-newspaper' style={{ color: '#ffbb2c' }}></i>
              <h3>Research</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <i className='fab fa-aws' style={{ color: '#5578ff' }}></i>
              <h3>Cloud</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <i className='fas fa-lightbulb' style={{ color: '#e80368' }}></i>
              <h3>Problem Solving</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-lg-0'>
            <div className='icon-box'>
              <i className='fas fa-database' style={{ color: '#e361ff' }}></i>
              <h3>Database</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i className='fas fa-seedling' style={{ color: '#47aeff' }}></i>
              <h3>Gardening</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i
                className='fas fa-theater-masks'
                style={{ color: '#ffa76e' }}
              ></i>
              <h3>Movies</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i className='fas fa-music' style={{ color: '#11dbcf' }}></i>
              <h3>Music</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
