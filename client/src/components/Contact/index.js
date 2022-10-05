import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-section">
            <div className='contact-form-div'>
                <h2>Contact Me</h2>
                <form id="contact-form" className='contact-form row' onSubmit={handleSubmit} >
                    <div className='col-12'>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <br />
                            <textarea name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                        </div>
                    </div>
                    {errorMessage && (
                        <div className='col-12'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className='contact-btn' type="submit">Submit</button>
                    <div className='col-12 personal-info'>
                        <h4>Personal Information</h4>
                        <div>
                            <h5>
                                Email Address
                            </h5>
                            <p>
                                <a href="mailto:avazque008@outlook.com">avazque008@outlook.com</a>
                            </p>
                        </div>
                        <div>
                            <h5>
                                Phone Number
                            </h5>
                            <p>
                                556.789.6723
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;