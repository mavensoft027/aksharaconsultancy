import React from "react";

const Footer = () => {
  return (
    <footer className="desktop-footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>© 2025 Akshara Consultancy • All Rights Reserved</p>
          <p className="designed">Designed by <strong>Naveen Bellad</strong></p>
        </div>

        <div class="footer-right">
          <span>Follow us:</span>

          <a href="#" class="social-icon instagram" id=".instagram-btn">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="#" class="social-icon facebook" id=".facebook-btn">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="#" class="social-icon linkedin" id=".linkedin-btn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
