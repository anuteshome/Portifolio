import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">GET IN TOUCH</h2>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <p>
            <strong>PHONE</strong>
            <br />
            +251 973424545
            <br />
        
          </p>
          <p>
            <strong>ADDRESS</strong>
            <br />
            Ethiopia,Addis Ababa
          </p>
          <p>
            <strong>EMAIL</strong>
            <br />
            ananyateshome2@gmail.com
            <br />
            anut15821@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-input"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="message"
            className="form-textarea"
            rows="5"
            required
          ></textarea>
          <div className="form-buttons">
            <button type="submit" className="form-button submit-button">
              Submit
            </button>
            <button type="reset" className="form-button clear-button">
              Clear
            </button>
          </div>
        </form>
      </div>

      <footer className="footer">
        <p>Ananya Teshome</p>
        <div className="footer-icons">
          {/* Replace # with social links */}
          <a href="#" className="social-icon">🔗</a>
          <a href="#" className="social-icon">🔗</a>
          <a href="#" className="social-icon">🔗</a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
