import Arrow from "../../assets/hero-arrow.png";
import HeroPic from "../../assets/hero-pic2.svg";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header-container'>
        <div className='left-section'>
          <ReactTyped strings={["Brand", "Content", "Marketing", "Design", "Media"]} className='left-section-text1' typeSpeed={80} backSpeed={60} loop />
          <h2 className='left-section-text2'>Digital</h2>
          <div className='left-section-text-combo'>
            <img src={Arrow} alt="hero-pic" className='arrow-icon' />
            <h2 className='left-section-text3'>Agency</h2>
          </div>
          <div className='left-bottom-section'>
            <p className='left-bottom-section-text1'>Hatinuda provides a full service range including technical skills, design, business understanding.</p>
            <div className='left-bottom-section-button-container'>
              <Link to="/about"><button className='left-button1'>Our Goals</button></Link>
              <Link to="/services"><button className='left-button2'>Our Works</button></Link>
              
            </div>
          </div>
        </div>
        <div className='right-section'>
          <img src={HeroPic} alt="hero-pic2" className='hero-pic' />
        </div>
    </header>
  )
}

export default Header