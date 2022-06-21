import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div data-aos="zoom-in-up" className='contact-us-main' id='contact-us'>
            <p>Culpa perferendis excepturi</p>
            <h2 className='contact-us-first-H2'>Contact Us</h2>
            <div className="row contact-div">
                <div className="col-7 form-div">
                    <form action="">
                        <div className="input">
                            <input type="text" name='name' placeholder='Enter Your Valid Name' required />
                            <input type="gmail" name='gmail' placeholder='Enter Your Valid Email' required />
                        </div>
                        <br />
                        <textarea name="" id="" placeholder='Enter Your Message'></textarea>
                        <br />
                    </form>
                    <button>Send Message</button>
                </div>
                <div className="col-5 info-div">
                    <div className="contact-infoo ms-5">
                        <h5>CONTACT INFO</h5>
                        <hr />
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p>12345 Fake ST NoWhere AB Country</p>
                        <p>cool@cool.com</p>
                        <p>(123) 456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;