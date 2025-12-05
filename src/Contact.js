import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="reveal" >
      <div className="contact-container">
        <h3>Contact Us</h3>

        <p className="contact-text">
          We are here to assist you with recruitment, advisory, insurance and
          real estate queries. Reach out to us for hiring support, consultation,
          collaborations or service-related enquiries. Our team responds within{" "}
          <b>24 hours</b>.
        </p>

        <div className="contact-details">
          <p>
            <span>📧</span> Email: <b>hello@akshara.consult</b>
          </p>
          <p>
            <span>📞</span> Phone: <b>+91 90000 00000</b>
          </p>
          <p>
            <span>📍</span> Location: Bengaluru, Karnataka
          </p>
          <p>
            <span>⏰</span> Working Hours: Mon–Sat, 10 AM – 6 PM
          </p>
        </div>

        <div className="contact-buttons">
          <a className="btn btn-primary" href="mailto:hello@akshara.consult">
            Email Us
          </a>
          <a className="btn btn-ghost" href="#">
            Book a Call
          </a>
          <a className="btn btn-primary" href="#">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
