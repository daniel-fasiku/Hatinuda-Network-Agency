import {useState, useEffect} from 'react'
import Logo from "../../assets/HATINUDA NETWORK 1.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data.js";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isNavScrolling, setIsNavScrolling] = useState(false);
  const handleNavigation = () => {
    setIsNavShowing(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setIsNavScrolling(true) : setIsNavScrolling(false)
    })
  }, []);
  

  return (
    <nav className={`nav-container ${isNavScrolling ? "dark-nav-cont" : ""}`} >
        <Link to="/" className='logo-container'>
            <img src={Logo} alt="company-logo" className='logo' onClick={() => setIsNavShowing(false)} />
        </Link>
            <ul className='link-element-container'>
            {
              links.map(({name, path}, index) => {
                return (
                  <li key={index} className='link-element'>
                    <NavLink to={path} className='link-element'>{name}</NavLink>
                  </li>
                )
              })
            }
            </ul>
            <Link to="/contact" className='contact-container'>
              <button className='contact-button'>Contact Us</button>
            </Link>
            <div className='menu-button'>
              <AiOutlineMenu size={18} onClick={handleNavigation}/>
            </div>
            <div className={`${isNavShowing ? "mobile-menu-container" : "hide-menu"}`}>
            <AiOutlineClose size={22} onClick={()=> setIsNavShowing(false)} className='close-menu-button'/>
              <ul className='menu-link-container'>
                {
                  links.map(({name, path}, index) => {
                    return (
                      <li key={index} className="menu-links"> 
                        <NavLink to={path} className="menu-links" onClick={()=> setIsNavShowing(false)}>{name}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
    </nav>
  )
}

export default Navbar