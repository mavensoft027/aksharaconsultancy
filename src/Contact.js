import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <div className="contact-container contact-flex">

        <div className="contact-left">
          <h3>Contact Us</h3>

          <p className="contact-text">
            We are here to assist you with recruitment, advisory, insurance and
            real estate queries. Reach out to us for hiring support, consultation,
            collaborations or service-related enquiries. Our team responds within
            <b>24 hours</b>.
          </p>

          <div className="contact-grid">

            <div className="contact-box">
              <span className="contact-icon">📧</span>
              <p>Email</p>
              <b>hello@akshara.consult</b>
            </div>

            <div className="contact-box">
              <span className="contact-icon">📞</span>
              <p>Phone</p>
              <b>+91 90000 00000</b>
            </div>

            <div className="contact-box">
              <span className="contact-icon">📍</span>
              <p>Location</p>
              <b>Bengaluru, Karnataka</b>
            </div>

            <div className="contact-box">
              <span className="contact-icon">⏰</span>
              <p>Working Hours</p>
              <b>Mon–Sat, 10 AM – 6 PM</b>
            </div>

          </div>

          <div className="contact-buttons">
            <a className="btn btn-primary" href="mailto:hello@akshara.consult">Email Us</a>
            <a className="btn btn-ghost" href="#">Book a Call</a>
            <a className="btn btn-primary" href="#">WhatsApp</a>
          </div>
        </div>


        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1765031087022!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </div>
    </section>

  );
};

export default Contact;
