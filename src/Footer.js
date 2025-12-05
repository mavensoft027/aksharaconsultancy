import React from "react";

const Footer = () => {
  return (
    <footer className="desktop-footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>© 2025 Akshara Consultancy • All Rights Reserved</p>
          <p className="designed">Designed by <strong>Naveen Bellad</strong></p>
        </div>

        <div className="footer-right">
          <span>Follow us:</span>

          <a href="#" className="social-icon instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" className="social-icon facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="#" className="social-icon linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
