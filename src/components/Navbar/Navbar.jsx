import React, {useState} from 'react'
import Logo from "../../assets/HATINUDA NETWORK 1.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data.js";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const handleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  return (
    <nav className='nav-container'>
        <Link to="/" className='logo-container'>
            <img src={Logo} alt="company-logo" className='logo' />
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
            <div className='contact-container'>
              <button className='contact-button'>Contact Us</button>
            </div>
            <div className='menu-button'>
              <AiOutlineMenu size={18} onClick={handleNavigation}/>
            </div>
            <div className={`${isNavShowing ? "mobile-menu-container" : "hide-menu"}`}>
            <AiOutlineClose size={22} onClick={handleNavigation} className='close-menu-button'/>
              <ul className='menu-link-container'>
                {
                  links.map(({name, path}, index) => {
                    return (
                      <li key={index} className="menu-links"> 
                        <NavLink to={path} className="menu-links">{name}</NavLink>
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