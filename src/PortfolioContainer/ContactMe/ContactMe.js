import React, { useState, useRef } from 'react';
import './ContactMe.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ContactMe() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formtemplateparam = {
      from_name: name,
      email: email,
      message: message,
      to_name: 'mavaneesh1@gamil.com',
    };
    emailjs
      .send(
        'service_k6xw97l',
        'template_qrkcd97',
        formtemplateparam,
        'ro-X6wyZTuTzqxrgY'
      )
      .then(
        (result) => {
          toast.success('Successful');
        },
        (error) => {
          toast.error('Error');
        }
      );
  };
  return (
    <>
      <div>
        <div className='contact-me-card row'>
          <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2'>
            <span className='get-in-touch mx-4 mt-5'>Get in Touch</span>
            <div className='py-5 d-flex justify-content-center'>
              <lottie-player
                src='https://assets9.lottiefiles.com/packages/lf20_zj3qnsfs.json'
                background='transparent'
                speed='1'
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='d-flex flex-column card-contact-right'
            >
              <div className='my-3 d-flex flex-column '>
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Enter Your Name'
                  className='input-groups'
                />
              </div>
              <div className=' my-3 d-flex flex-column'>
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  placeholder='Enter Your Email'
                  className='input-groups'
                />
              </div>
              <div className=' my-3 d-flex flex-column'>
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                  placeholder='Enter Your Message'
                  className='input-groups'
                />
              </div>
              <div className=' my-3 d-flex flex-column'>
                <input
                  type='submit'
                  value='Send Message'
                  className='btn1 btn-success'
                />
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
