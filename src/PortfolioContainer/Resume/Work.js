import './Resume.css';
export default function Work() {
  return (
    <>
      <div className='work-inside-new mx-2 my-4'>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-row justify-content-between'>
            <span className='company-name'> XorLabs</span>
            <button className='btn primary-btn'>2021-Present</button>
          </div>
        </div>
        <div className='d-flex flex-column'>
          <span className='postion'> Software Engineer</span>
          <span className='description-postion'>
            <ul>
              <li>Working on Avery Telehealth Project and Key disruptor</li>
              <li>
                Developing Frontend using React.js a library like material UI,
                react Icons, Axios and many other library
              </li>
              <li>
                Within Sort period of time handling the project Frontend Alone.
              </li>
              <li>We use SVN Tortoise for committing the code</li>
              <li>I have been Also Doing API integration in the Project</li>
              <li>Working on Avery Telehealth Project</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
