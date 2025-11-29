import "./Nav1.css";

const Nav1 = () => {
  return (
    <div className="nav">
      
    
      <h1 className="nav-logo">hospione</h1>

  
      <div className="nav-right">

    
        <div className="toll">
          <p className="toll-title">Toll Free No</p>
          <p className="toll-number">1800 666 888</p>
        </div>

       
        <div className="nav-buttons">
          <button className="appointment">Appointment</button>
          <button className="location">Location</button>
        </div>

      </div>
    </div>
  );
};

export default Nav1;
