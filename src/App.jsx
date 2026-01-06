import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <h2>Big Partner</h2>
            <span>Consultancy</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Strategic Partnerships for
            <span className="highlight"> Big Business</span>
          </h1>
          <p className="hero-subtitle">
            We connect enterprises with transformative opportunities, 
            building lasting partnerships that drive growth and innovation.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-icon">🤝</div>
            <h3>Partnership Excellence</h3>
            <p>Building bridges between industry leaders</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive consultancy solutions for enterprise partnerships</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Strategic Planning</h3>
              <p>Develop comprehensive strategies that align with your business objectives and market opportunities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Partnership Development</h3>
              <p>Identify and cultivate strategic partnerships that create mutual value and drive growth.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Market Analysis</h3>
              <p>Deep market insights and competitive intelligence to inform your strategic decisions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Growth Consulting</h3>
              <p>Expert guidance on scaling operations, entering new markets, and maximizing opportunities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Relationship Management</h3>
              <p>Build and maintain strong relationships with key stakeholders and partners.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Innovation Advisory</h3>
              <p>Navigate digital transformation and leverage emerging technologies for competitive advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Big Partner Consultancy</h2>
              <p>
                With years of experience in enterprise consulting, we specialize in 
                creating strategic partnerships that transform businesses. Our team 
                of experts understands the complexities of large-scale operations 
                and the importance of building relationships that last.
              </p>
              <p>
                We work with Fortune 500 companies, emerging enterprises, and 
                innovative startups to identify opportunities, mitigate risks, and 
                create pathways to sustainable growth.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Successful Partnerships</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Industry Experts</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-card">
                <div className="card-badge">Trusted Partner</div>
                <h3>Excellence in Every Partnership</h3>
                <p>We measure success by the lasting value we create for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to explore partnership opportunities? Let's connect.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@bigpartnerconsultancy.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Office</h4>
                  <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company Name" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Big Partner Consultancy</h3>
              <p>Building strategic partnerships for enterprise success.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Strategic Planning</li>
                <li>Partnership Development</li>
                <li>Market Analysis</li>
                <li>Growth Consulting</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Facebook">Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Big Partner Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

