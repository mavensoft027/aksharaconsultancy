import React from "react";
import logo from './assets/aboutimage.png'; 

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="about-container about-flex">

        <div className="about-left">
          <h3>About Akshara Consultancy</h3>

          <p>We are based in Bangalore — the Silicon City of India.</p>

          <p>
            <strong>Akshara Consulting Services</strong> has a dedicated team of young
            professionals committed to the company’s mission.
          </p>

          <p>
            We bring the right combination of proficiency to help organizations acquire
            flexible and permanent workforces, enhancing operational efficiency.
          </p>

          <p>
            With a strong commitment to quality, we aim to become one of the leading
            independent providers of HR resources for IT, ITES, and non-IT industries.
          </p>

          <p>
            We provide suitable candidates for employment at all levels across various
            functional areas and maintain an updated database of professional profiles.
          </p>

          <p>
            We adopt a holistic, research-oriented approach supported by a strong
            technological platform to deliver company-specific staffing solutions.
          </p>

          <p>
            Our talent pool supports staffing needs for entry-level, junior, middle,
            and senior management positions across industries.
          </p>

          <p>
            Based on client requirements, we conduct preliminary assessments to evaluate
            candidate suitability.
          </p>

          <p>
            We act as an extension of your team and stay committed to delivering
            outstanding results from start to finish.
          </p>
        </div>

        <div className="about-right">
          <img src={logo} alt="Akshara Consultancy" />
        </div>

      </div>
    </section>

  );
};

export default About;
