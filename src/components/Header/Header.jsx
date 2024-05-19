import React from 'react'
import Arrow from "../../assets/hero-arrow.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
    <div>
        <div>
            <h2>Creative</h2>
            <h2>Digital</h2>
            <img src={Arrow} alt="hero-pic"  /> 
            <span><h2>Agency</h2></span>
            <div>
                <p>Hatinuda provides a full service range including technical skills, design, business understanding.</p>
                <div>
                    <button>Our Goals</button>
                    <button>Our Works</button>
                </div>
            </div>
        </div>
        <div>right section</div>
    </div>
    </header>
  )
}

export default Header