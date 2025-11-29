import React from "react";
import "./HowItWorks.css";

import registration from "../assets/registration.jpeg";
import specialist from "../assets/specialist.jpeg";
import appointment from "../assets/appointment.jpeg";
import doctor from "../assets/doctor.jpeg";

const steps = [
  { img: registration, title: "Registration" },
  { img: specialist, title: "Talk To Specialist" },
  { img: appointment, title: "Book Appointment" },
  { img: doctor, title: "Choose A Doctor" },
];

const HowItWorks = () => {
  return (
    <div className="how-wrapper">
      <h3 className="sub-heading">How HospiOne Works</h3>
      <h2 className="main-heading">
        A Simplified Procedure To <br /> Cure Your Health
      </h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="img-circle">
              <img src={step.img} alt={step.title} />
            </div>
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>

      <div className="help-box">
        If you have difficulty understanding our work process please{" "}
        <span className="contact-link">contact us</span> for better information.
      </div>
    </div>
  );
};

export default HowItWorks;
