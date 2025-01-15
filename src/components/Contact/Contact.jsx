import React from 'react'
import theme_pattern from '../../images/theme_pattern.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoLogoWhatsapp } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  emailjs.init('F5i4_UKfSE0c7N-F1');
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();
console.log('submitted');

    emailjs
      .sendForm('service_hl6rlxs', 'template_dkgnar8', form.current, 'F5i4_UKfSE0c7N-Fl')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
<>
  <div className='contact-title'>
    <h1>Get in touch</h1>
    <img src={theme_pattern} alt="" />
  </div>

 <div className="whole-contact row">
  <div className="lets-talk col-lg-6 col-md-6 col-sm-12  col-12">
    <h2>Let's talk</h2>
    <Card className='contact-card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><MdMailOutline /></Card.Title>
        <Card.Title>Email</Card.Title>
        <Card.Subtitle className="mb-2 ">aminaparveenck@gmail.com</Card.Subtitle>
        <Card.Text>
        <a className='card-link' href="mailto:aminaparveenck@gmail.com">Send a message</a>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card className='contact-card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><BiPhoneCall /></Card.Title>
        <Card.Title>Call</Card.Title>
        <Card.Subtitle className="mb-2 ">+91 7510788511</Card.Subtitle>
        <Card.Text>
        <a className='card-link' href="tel:917510788511">Make a Call</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='contact-card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><IoLogoWhatsapp /></Card.Title> 
        <Card.Title className='contact-card-title'>Whatsapp</Card.Title>
        <Card.Subtitle className="contact-card-subtitle mb-2 ">+91 7510788511</Card.Subtitle>
        <Card.Text>
       <a className='card-link' href="https://api.whatsapp.com/send?phone=917510788511"> Send a message</a>
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>

  <div className="forms col-lg-6 col-md-6 col-sm-12 col-12">
    <Form  ref={form} className='contact-form' onSubmit={sendEmail} >
        <input className='form-control text-secondary' type="text" name='name' placeholder="Enter your name" required/>
        <input className='form-control text-secondary' type="email" name='email' placeholder="Enter your email" required />
        <textarea  className='form-control-textarea text-secondary' rows={10} name='message' placeholder="Enter your message" required/>
      <div className='form-submit-btn'>
      <Button type='submit' className='form-submit' >Submit now</Button>
      </div>
    </Form>
  </div>
</div>
</>
  )
}

export default Contact