import React, { useState } from 'react';
import gitHub from '../assets/icons/github.svg';
import linkedIn from '../assets/icons/linkedin.svg';

const Contact= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Form validation (optional)
    
        // Submit form data (replace with your method)
        console.log('Submitting form data:', { name, email, message });
    
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      };


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
                        <label><p className='body-1'>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </p>
                        </label>
                        <label>
                            <p className='body-1'> Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </p>
                        </label>
                        <label>
                            Message:
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </label>
                        <button className='primary-btn' type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            
        </div>
    );
};

export default Contact;