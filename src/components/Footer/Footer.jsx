
import Logo from "../../assets/HATINUDA NETWORK 1.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='content-container'>
        <article className='footer-top-section'>
          <div className="footer-section1">
            <div className="logo-cont">
              <Link to="/">
              <img src={Logo} alt="logo" className="footer-logo" />
              </Link>
              
              <p className="logo-text">hatinuda is a creative agency to provides the best specializes  digital creative solution in Nigeria to helps brands achieve their full potential.</p>
            </div>
          </div>
          <div className="footer-section2">
            <article>
              <Link to="/" className='link-style'><p className="t1">Home</p></Link>
              <Link to="/about" className='link-style'><p className="t2">About Us</p></Link>
              <Link to="/services" className='link-style'><p className="t2">Our Services</p></Link>
            </article>
            <article>
              <Link to="/contact" className='link-style'><p className="t1">Contact Us</p></Link>
              <a className="t2"href="mailto:hatinudanetwork@gmail.com" rel='noreferrer noopener'><p >Gmail</p></a>
              <a className="t2"href="https://www.instagram.com/hatinuda/" target='_blank' rel='noreferrer noopener'><p >Instagram</p></a>
              <a className="t2"href="tel:+23481455771499" rel="noreferrer noopener"><p>Call</p></a>
            </article>
          </div>
        </article>
        <div className="footer-bottom-section">
          <small className="copyright-text">&copy;2024 Hatinuda, All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer