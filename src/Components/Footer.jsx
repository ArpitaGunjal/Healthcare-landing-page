import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">

        
        <div className="footer-brand">
          <h2 className="footer-logo">hospione</h2>
          <p className="footer-text">
            Lorem ipsum dolor, sit amet earum consectetur adipisicing elit.
            Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis,
          </p>

          <p className="footer-contact">1800 222 666</p>
          <p className="footer-contact">info@hospione.com</p>
        </div>

 
        <div className="footer-column">
          <h3>INFORMATION</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Media</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>FAQ’s</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h3>PATIENT CARE</h3>
          <ul>
            <li>Find a Doctor</li>
            <li>Book Physical Appointment</li>
            <li>Patient Testimonials</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>CENTERS OF EXCELLENCE</h3>
          <ul>
            <li>Orthopedics</li>
            <li>Cardiology</li>
            <li>Laparoscopy</li>
            <li>Proctology</li>
            <li>Urology</li>
            <li>Gastroenterology</li>
            <li>Cosmetic / Aesthetic</li>
            <li>Infertility</li>
            <li>Gynecology</li>
            <li>Vascular</li>
            <li>ENT</li>
            <li>Opthal</li>
            <li>Neurosurgery / Neurology</li>
            <li>Bariatric Surgery</li>
            <li>Homecare</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <ul>
            <li>Ask a Query</li>
            <li>Give Your Feedback</li>
            <li>Hospi One Lifeline</li>
            <li>Become a arogyasathi</li>
            <li>Career</li>
          </ul>
        </div>

      </div>

      
      <div className="footer-bottom">
        <div className="footer-social">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <p className="bottom-text">
          Copyrights (c) 2022.HospiOne.All rights reserved.
          Design by <span className="highlight">Digital Marketing StudioGenix</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
