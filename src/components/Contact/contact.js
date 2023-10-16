import React, { useRef } from 'react'
import './contact.css'
import LinkedInIcon from '../../assets/linkedin-icon.png'
import GithubIcon from '../../assets/github-icon.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bxlda4j', 'template_gfymdrf', form.current, 'rBVj4bT3dWc4TRTKU')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent!')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Let's Connect</h1>
                <span className='contactDesc'>I'm currently looking for new opportunities in the field of design and programming.<br /> If you want to get in touch feel free to reach out and send me an email.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href='https://github.com/mythiha-pham'><img src={GithubIcon} alt='Github' className='link' /></a>
                        <a href='https://www.linkedin.com/in/my-pham-3b23781b8/'><img src={LinkedInIcon} alt='LinkedIn' className='link' /></a>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Contact
