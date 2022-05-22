import { useState } from 'react';
import './Resume.css';
import Work from './Work';
import Programing from './Programing';
import Education from './Education';
import Projects from './Projects';
import Interests from './Interests';
export default function Resume() {
  const [Education1, setEducation1] = useState(true);
  const [WorkHistrory1, setWorkHistrory1] = useState(false);
  const [Programing1, setPrograming1] = useState(false);
  const [Projects1, setProjects1] = useState(false);
  const [Interests1, setInterests1] = useState(false);
  function SetAllFalse() {
    setEducation1(false);
    setWorkHistrory1(false);
    setPrograming1(false);
    setProjects1(false);
    setInterests1(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <>
      <div
        className='resume-new-section row justify-content-center shadow-lg my-5'
        // style={{ width: '90%', marginInline: 'auto', height: '400px' }}
      >
        <div className='col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row '>
          <div className='d-flex flex-column bg-new text-white '>
            <span
              className='icons-span'
              onClick={() => ChangeState(setEducation1, true)}
            >
              <i className='fas fa-user-graduate'></i>
            </span>
            <span
              className='icons-span'
              onClick={() => ChangeState(setWorkHistrory1, true)}
            >
              <i className='fas fa-briefcase'></i>
            </span>{' '}
            <span
              className='icons-span'
              onClick={() => ChangeState(setPrograming1, true)}
            >
              <i className='fas fa-laptop-code'></i>
            </span>{' '}
            <span
              className='icons-span'
              onClick={() => ChangeState(setProjects1, true)}
            >
              <i className='fas fa-tasks'></i>
            </span>
            <span
              className='icons-span'
              onClick={() => ChangeState(setInterests1, true)}
            >
              <i className='	fas fa-mug-hot'></i>
            </span>
          </div>
          <div className='d-flex flex-column'>
            <span
              className={
                Education1
                  ? ' selected resume-options-items '
                  : 'resume-options-items'
              }
              onClick={() => ChangeState(setEducation1, true)}
            >
              Education
            </span>
            <span
              className={
                WorkHistrory1
                  ? ' selected resume-options-items '
                  : 'resume-options-items'
              }
              onClick={() => ChangeState(setWorkHistrory1, true)}
            >
              Work
            </span>
            <span
              className={
                Programing1
                  ? ' selected resume-options-items '
                  : 'resume-options-items'
              }
              onClick={() => ChangeState(setPrograming1, true)}
            >
              Programing
            </span>
            <span
              className={
                Projects1
                  ? ' selected resume-options-items '
                  : 'resume-options-items'
              }
              onClick={() => ChangeState(setProjects1, true)}
            >
              Projects
            </span>
            <span
              className={
                Interests1
                  ? ' selected resume-options-items '
                  : 'resume-options-items'
              }
              onClick={() => ChangeState(setInterests1, true)}
            >
              Interests
            </span>
          </div>
        </div>
        <div className='col-lg-8 col-md-8 resume-right-section projects-main'>
          {Education1 === true && <Education />}
          {Projects1 === true && <Projects />}
          {Programing1 === true && <Programing />}
          {WorkHistrory1 === true && <Work />}
          {Interests1 === true && <Interests />}
        </div>
      </div>
    </>
  );
}
