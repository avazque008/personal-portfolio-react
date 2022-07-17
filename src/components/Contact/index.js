import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);
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
        <section className="container contact-section">
            <div className='contact-form-div'>
                <h2>Contact me</h2>
                <form id="contact-form" className='contact-form row' onSubmit={handleSubmit} >
                    <div className='col-12'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div className='col-12'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className='contact-btn' type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;