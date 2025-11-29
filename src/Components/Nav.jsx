import "./Nav.css";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>Language</span>

        

        <input className="search-input" type="text" placeholder="Search..." />
      </div>

      <ul className="topbar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Surgeries</li>
        <li>Media</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">LOGIN</button>
    </div>
  );
};

export default Navbar;
