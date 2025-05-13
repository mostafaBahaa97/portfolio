
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#"> <img src={logo} alt="logo" style={{ objectFit: 'cover', width: '150px', height: '80px' }} /> </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link fs-5" href="#About">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#Services">Services</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;