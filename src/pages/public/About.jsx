import React from 'react';
import { FaCheckCircle, FaAward, FaGlobe, FaUsers, FaLightbulb, FaEye, FaHandshake, FaUserGraduate } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>About BIG Partnership</h1>
            <p>Empowering students through global education opportunities since inception.</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Redefining International Education</h2>
              <p>BIG Partnership (Britts Imperial Global Partnership) is a trusted international education consultancy dedicated to guiding students toward globally recognized universities. We understand that choosing the right education path is one of the most significant decisions in a student's life.</p>
              <p>Our comprehensive approach ensures that every student receives personalized attention, from identifying the right destination to securing admission and navigating the visa process. We are committed to transparency, excellence, and the success of our students.</p>
            </div>
            <div className="intro-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <FaLightbulb className="mv-icon" />
              <h3>Our Mission</h3>
              <p>To empower students with transparent guidance and global education opportunities, enabling them to build a successful future on the international stage.</p>
            </div>
            <div className="mv-card">
              <FaEye className="mv-icon" />
              <h3>Our Vision</h3>
              <p>To become a leading international education partner worldwide, recognized for our integrity, student-centric approach, and excellence in service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that drive everything we do at BIG Partnership.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Integrity</h3>
              <p>We maintain the highest standards of honesty and transparency in all our interactions with students and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every service we provide, ensuring the best outcomes for our students.</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Transparency</h3>
              <p>We provide clear, accurate information at every step of the journey, with no hidden costs or false promises.</p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Student-Centric</h3>
              <p>Our students' needs and aspirations are at the heart of everything we do. Their success is our success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <FaAward className="stat-icon" />
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-box">
              <FaUserGraduate className="stat-icon" />
              <h3>5000+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat-box">
              <FaGlobe className="stat-icon" />
              <h3>300+</h3>
              <p>University Partners</p>
            </div>
            <div className="stat-box">
              <FaHandshake className="stat-icon" />
              <h3>98%</h3>
              <p>Visa Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
