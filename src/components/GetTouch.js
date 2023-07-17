import React from 'react';
import emailjs from 'emailjs-com';
import './GetTouch.css';

function GetTouch() {
  const handleSubmit = (e) => {
    e.preventDefault();

   emailjs.sendForm('service_4f87sbn', 'template_thh5flv', e.target, 'tMEd7jsKf4feXUzI_')
    .then(function(response) {
       alert("Message sucessfully sended")
    }, function(error) {
       alert("Something went wrong")
    })
  };

  return (
    <div>
      <section className="contact">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i className="fa fa-map-marker" /> Hyderabad | Telangana
            </li>
            <li>
              <i className="fa fa-phone" /> 9030865747
            </li>
            <li>
              <i className="fa fa-envelope" /> Mohd Aman Khan
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="from_name">Name:</label>
            <input type="text" id="from_name" name="from_name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required defaultValue={""} />
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </section>
    </div>
  );
}

export default GetTouch;


