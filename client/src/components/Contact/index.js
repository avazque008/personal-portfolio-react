import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your Email Is Invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} Is Required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (name && email && message) {
                const mailResponse = await fetch('/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formState)
                })

                console.log(mailResponse.json());
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="contact-section">
            <div className='contact-form-div'>
                <h2>Contact Me</h2>
                <form id="contact-form" className='row'>
                    <div className='col-12 col-md-6 personal-info'>
                        <h4>Personal Information</h4>
                        <div>
                            <h5 style={{ fontWeight: 'bold' }}>
                                Email Address
                            </h5>
                            <p>
                                <a href="mailto:avazque008@outlook.com" style={{ textDecoration: 'none' }}>avazque008@outlook.com</a>
                            </p>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: 'bold' }}>
                                Phone Number
                            </h5>
                            <p>
                                929.471.8919
                            </p>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: 'bold' }}>
                                Resume
                            </h5>
                            <a href={require('../../assets/resume/Resume.pdf')} download>
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 contact-form '>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <br />
                            <textarea name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div className='col-12'>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button className='contact-btn' type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;