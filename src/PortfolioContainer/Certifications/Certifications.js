import React from 'react';
import './Certifications.css';
import { FaAward } from 'react-icons/fa';
export default function Certifications() {
  const CertificationsList = [
    {
      id: 1,
      CertificationsName: 'Azure Fundamentals (AZ-900)',
      complete:
        'Microsoft Certified  Azure Fundamentals (Az-900) by Microsoft Azure',
    },

    {
      id: 2,
      CertificationsName: 'Fundamentals of Digital Marketing',
      complete: 'Google Certified Digital Marketer by Google Digital Garage.',
    },
    {
      id: 3,
      CertificationsName: 'Software Engineering Virtual Expirence',
      complete:
        'Certified Virtual Internship by Codules Technologies Pvt. Ltd.',
    },
    {
      id: 4,
      CertificationsName: 'Core Java Ceritification Course',
      complete: 'Core Java certification by INCAPP, Greater Noida.',
    },
    {
      id: 5,
      CertificationsName: ' Advance Java Ceritification Course',
      complete: 'Advance Java certification by INCAPP, Greater Noida.',
    },
  ];
  return (
    <>
      <div className='row mx5'>
        {CertificationsList.map((item) => {
          return (
            <div key={item.id} className='col-lg-4 col-sm-12 col-ms-6'>
              <div className='card shadow testmonials-card d-flex flex-column'>
                <span className='testmonials-icons-card'>
                  <FaAward />
                </span>
                <span className='description'>{item.CertificationsName}</span>
                <span className='name'>{item.complete}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
