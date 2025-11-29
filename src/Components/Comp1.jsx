import "./Comp1.css";
import doctorImage from "../assets/img3.png";
import quality from "../assets/quality.jpeg";
import affordable from "../assets/affordable.jpeg";
import surgery from "../assets/surgery.jpeg";
import modern from "../assets/modern.jpeg";



const Comp1 = () => {
  const specialties = [
    "ORTHOPEDICS", "CARDIOLOGY", "LAPAROSCOPY", "PROCTOLOGY",
    "UROLOGY", "GASTROENTEROLOGY", "ONCOLOGY", "COSMETIC",
    "INFERTILITY", "GYNECOLOGY", "VASCULAR", "ENT", "OPTHAL", "VIEW ALL"
  ];

  return (
    <div className="hero-container">

      <div className="specialties-menu">
        {specialties.map((item, i) => (
          <div className="menu-item" key={i}>
            <div className="menu-icon"></div>
            <p>{item}</p>
          </div>
        ))}
      </div>

   
      <div className="hero-content">

      
        <div className="hero-left">
          <p className="hero-subtitle">Consult Top Doctors Online</p>

          <h1 className="hero-title">
            Find Specialized Doctors <br /> & Get Quality Treatments
          </h1>

          
        <div className="hero-features">
        {[
            { img: quality, text: "Quality Care" },
            { img: affordable, text: "Affordable" },
            { img: surgery, text: "Surgeries" },
            { img: modern, text: "Modern Techniques" }
        ].map((item, i) => (
            <div className="feature-box" key={i}>
                 <div className="feature-icon">
                    <img src={item.img} alt={item.text} className="feature-img" />
                </div>
                <p>{item.text}</p>
            </div>
            ))}
        </div>



          <p className="hero-description">
            Usually we try to do as much as possible so that our patients
            don’t have any difficulty and provides prompt treatment.
          </p>

          
          <div className="hero-buttons">
            <button className="btn-outline">1800 666 888</button>
            <button className="btn-filled">Book Free Consultation</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={doctorImage} alt="Doctors" />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
