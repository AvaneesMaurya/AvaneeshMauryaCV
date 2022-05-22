import './Resume.css';
export default function Education() {
  return (
    <>
      <div className='d-flex flex-column'>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='university-name'>
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </span>
            <span className='university-degree'>
              Bachelors of Technology in Computer Science
            </span>
          </div>

          <div>
            <button className='btn primary-btn'>2018-2021</button>
          </div>
        </div>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='university-name'>
              Maharashtra State Board Of Technical Education, Mumbai.
            </span>
            <span className='university-degree'>
              Diploma in Industrial Electronics
            </span>
          </div>

          <div>
            <button className='btn primary-btn'>2015-2018</button>
          </div>
        </div>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='university-name'>St' Francis High School</span>
            <span className='university-degree'>
              Secondary School Certificate (Class 10th)
            </span>
          </div>

          <div>
            <button className='btn primary-btn'>2015</button>
          </div>
        </div>
      </div>
    </>
  );
}
