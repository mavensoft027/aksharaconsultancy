import React, { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    // Reveal animation
    const hero = document.querySelector(".hero");
    hero.classList.add("show");

    // Stats counter
    const nums = document.querySelectorAll(".num");
    nums.forEach(el => {
      const target = +el.getAttribute("data-target") || 0;
      let current = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const id = setInterval(() => {
        current += step;
        if (current >= target) { el.textContent = target; clearInterval(id); }
        else el.textContent = current;
      }, 18);
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="heroaside">
        <div className="hero-left">
          <div className="eyebrow reveal">Trusted since 2016</div>
          <h2 className="reveal">
            Premium talent & sector expertise for Banking, Automobile, Insurance & Real Estate
          </h2>
          <p className="reveal">
            We place verified professionals, close critical roles quickly, and consult on property and insurance portfolios.
          </p>

          <div className="actions reveal">
            <button className="btn btn-primary" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Request Talent </button>
            <button className="btn btn-ghost" onClick={() => alert("We run a staged hiring process: Intake → Shortlist → Screening → Interview → Offer.")}>How we work</button>
          </div>
        </div>

        <aside className="hero-right reveal">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <strong>Quick Stats</strong>
            <small style={{ color: "var(--muted)" }}>Updated</small>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num" data-target="352">0</div>
              <div className="label">Roles filled</div>
            </div>
            <div className="stat">
              <div className="num" data-target="128">0</div>
              <div className="label">Partner clients</div>
            </div>
            <div className="stat">
              <div className="num" data-target="94">0</div>
              <div className="label">Avg days to hire</div>
            </div>
          </div>

          <div>
            <div className="features reveal">
              <div className="pill">■ Executive Hiring</div>
              <div className="pill">■ Campus & Lateral</div>
              <div className="pill">■ Real Estate Advisory</div>
              <div className="pill">■ Insurance Solutions</div>
            </div>
          </div>
        </aside>
      </div>



      {/* --- Additional Content Below Hero --- */}

      <div className="why-us section">
        <h2 className="section-title">Why Companies Choose Akshara Consultancy</h2>
        <p className="section-subtitle">
          A trusted recruitment and consulting partner for fast-scaling businesses across India.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <h3>✔ Fast Turnaround</h3>
            <p>Targeted hiring process that closes roles 40% faster than industry average.</p>
          </div>

          <div className="why-card">
            <h3>✔ Verified Talent Pool</h3>
            <p>Each candidate goes through background checks, role-fit evaluation and skill screening.</p>
          </div>

          <div className="why-card">
            <h3>✔ Sector Expertise</h3>
            <p>Deep specialization in Banking, Real Estate, Automobile, Insurance & Corporate roles.</p>
          </div>

          <div className="why-card">
            <h3>✔ Zero Hassle Hiring</h3>
            <p>We manage sourcing, filtering, interviews, follow-ups and offer closures end-to-end.</p>
          </div>
        </div>

        <div className="industries section">
          <h2 className="section-title">Industries We Serve</h2>

          <div className="industries-grid">
            <div className="industry-box">🏦 Banking & NBFC</div>
            <div className="industry-box">🚗 Automobile</div>
            <div className="industry-box">🏘 Real Estate</div>
            <div className="industry-box">🛡 Insurance</div>
            <div className="industry-box">📞 BPO & Customer Support</div>
            <div className="industry-box">💼 Corporate Hiring</div>
          </div>
        </div>

        <div className="process-simple section">
          <h2 className="section-title">Our Simplified Hiring Process</h2>

          <p className="section-subtitle">
            A transparent, fast and result-driven approach designed to help clients hire the right talent with zero complications.
          </p>

          <div className="process-row">
            <div className="step-box">
              <span className="step-number">1</span>
              <p className="step-title">Requirement Intake</p>
              <small>
                We understand your job role, experience range, skills, salary budget and company culture to define the perfect hiring match.
              </small>
            </div>

            <div className="step-box">
              <span className="step-number">2</span>
              <p className="step-title">Candidate Shortlisting</p>
              <small>
                Using our verified talent pool, job portals and internal network, we shortlist only the most relevant profiles for your review.
              </small>
            </div>

            <div className="step-box">
              <span className="step-number">3</span>
              <p className="step-title">Screening & Interviews</p>
              <small>
                We conduct initial screening, schedule interviews, coordinate with candidates and ensure smooth communication.
              </small>
            </div>

            <div className="step-box">
              <span className="step-number">4</span>
              <p className="step-title">Offer & Onboarding</p>
              <small>
                Once selected, we assist with offer rollouts, negotiation, joining updates and ensure a hassle-free onboarding experience.
              </small>
            </div>
          </div>
        </div>

        <div className="deliverables section">
          <h2 className="section-title" >What We Deliver</h2>
          <p className="section-subtitle">
            Our consultancy combines industry expertise, deep networks, and a performance-driven approach.
          </p>

          <div className="deliver-grid">
            <div className="deliver-card">
              <h3>🎯 Guaranteed Shortlists</h3>
              <p>We deliver qualified and verified candidates within the first 48 hours of requirement intake.</p>
            </div>

            <div className="deliver-card">
              <h3>🤝 Long-Term Partnerships</h3>
              <p>90% of our clients work with us for repeated hiring needs across multiple departments.</p>
            </div>

            <div className="deliver-card">
              <h3>📊 Performance Insights</h3>
              <p>We share hiring metrics, shortlist quality reports, and market salary data for better decisions.</p>
            </div>

            <div className="deliver-card">
              <h3>📞 Dedicated Support</h3>
              <p>Fast communication, transparent updates, and a single point of contact for every client.</p>
            </div>
          </div>
        </div>
        <div className="testimonials section">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            A few words from our partners who trust us for consistent and high-quality talent.
          </p>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <p className="t-text">
                “Akshara Consultancy closed 14 positions for our sales team in under 3 weeks. Highly professional and transparent.”
              </p>
              <h4 className="t-author">HR Manager — Automobile Company</h4>
            </div>

            <div className="testimonial-card">
              <p className="t-text">
                “The shortlisted candidates were exactly what we needed. The process was smooth and fast.”
              </p>
              <h4 className="t-author">Operations Head — Banking & Finance</h4>
            </div>

            <div className="testimonial-card">
              <p className="t-text">
                “From hiring to real-estate consultation, their support helped us expand our branch faster.”
              </p>
              <h4 className="t-author">Regional Manager — Insurance Firm</h4>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
