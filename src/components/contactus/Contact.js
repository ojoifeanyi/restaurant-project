import React from 'react'
import './style.css';

function Contact() {
  return (
    <div>
      <main>
        <section className="heros contact-banner">
          <h2><span>CONTACT - US</span></h2>
        </section>
      </main>
      <div className="location" data-aos="fade-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126828.18326945946!2d3.20657811640625!3d6.5995167000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93dd409a71e9%3A0xd63dc939c9384dbb!2sPremium%20Toppers!5e0!3m2!1sen!2sng!4v1651002896007!5m2!1sen!2sng" width="600" height="450" title="myframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>        
      <section className="contact-us">
        <div className="rrow">
          <div className="contact-col" data-aos="fade-right">
            <h3>Contact Info</h3>
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Address</h5>
                  <p>John Olugbo street, Off Toyin St.</p>
                  <p>Ikeja, Lagos</p>
                </span>
              </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>Call us</h5>
                <p>07038656839</p>
                <p>09017325223</p>
              </span>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <span>
                <h5>Email us any complaints</h5>
                <p>toppers@gmail.com</p>
              </span>
            </div>
        </div>
        <div className="contact-col" data-aos="fade-left">
          <h3>Get in touch with us</h3>
          <p>We are available 24/7 by fax, e-mail or by phone. You can also use our
                quick contact form to ask a question about our products.</p>
          <form action="">
            <input className="input" type="text" placeholder="Enter your name" required />
            <input className="input" type="email" placeholder="Enter email address" required />
            <input className="input" type="text" placeholder="Enter your subject" required />
            <input className="input" type="text" placeholder="Message" required />
            <button type="submit" className="hero-btn red-btn">Send Message</button>
          </form>
        </div>
      </div>    
    </section>
  </div>
  )
}

export default Contact ;