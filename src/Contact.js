import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

          <p className="contact-text">
          We are here to assist you with recruitment, advisory, insurance and
          real estate queries. Reach out to us for hiring support, consultation,
          collaborations or service-related enquiries. Our team responds within
          <b> 24 hours</b>.
        </p>

      <div className="contact-section">
        <div className="contact-left">

          <div className="contact-card">
            <div className="contact-icon whatsapp">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <p>WhatsApp:<br />+91 9019040426</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon gmail">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <p>Email:<br />mavensoft.info@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <p>Phone:<br />+91 9019040426</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <p>Location:<br />Bengaluru, India</p>
          </div>

        </div>

        <div  className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1765113986359!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </div>
    </section>
  );
};

export default Contact;
