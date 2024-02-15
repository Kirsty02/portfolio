import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gitHub from '../assets/icons/github.svg';
import linkedIn from '../assets/icons/linkedin.svg';

const Contact= () => {
    const [state, handleSubmit] = useForm("xleqblea");
    if (state.succeeded) {
        return  <p> email sent!</p>
    }
    return (
        <div className="contact">
            <hr></hr>
            <div className='columns getInTouch'>
                <div className='leftColumn'>
                    <h2> Get in Touch</h2>
                </div>
                <div className='rightColumn '>
                    <p className='body-1'>I’d love to hear about what you’re working on and how I could help. I’m currently
                         looking for a new role and am open to a wide range of opportunities. My preference 
                         would be to find a position in a company in London. But I’m also happy to hear about 
                         opportunites that don’t fit that description. I’m a hard-working and positive person
                          who will always approach each task with a sense of purpose and attention to detail. 
                        Please do feel free to check out my online profiles below and get in touch using the 
                        form.
                    </p>
                    <div className='socailList'>
                        <img src={gitHub} alt="My Logo" /> 
                        <img src={linkedIn} alt="My Logo" /> 
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='columns getInTouch'>
                <div className='leftColumn'>
                    <h2> Contact Me</h2>
                </div>
                <div className='rightColumn '>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="email"> <p className='form-text'>Email Address</p></label>
                        <input id="email"type="email" name="email" />
                        <ValidationError prefix="Email" field="email"errors={state.errors} />
                        <label htmlFor="message"><p className='form-text'>Message:</p></label>
                        <textarea id="message"name="message"/>
                        <ValidationError  prefix="Message"   field="message" errors={state.errors} />
                        <button className='primary-btn'  type="submit" disabled={state.submitting}> Send Message</button>
                    </form>


                </div>
            </div>

            
        </div>
    );
};

export default Contact;