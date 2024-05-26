import Adobe from "../../assets/adobe2.svg";
import Figma from "../../assets/figma2.svg";
import Canva from "../../assets/canva2.svg";
import Illustrator from "../../assets/illustrator2.svg";
import Photoshop from "../../assets/photoshop2.svg";
import Blender from "../../assets/blender2.svg";
import Marquee from "react-fast-marquee";
import "./Carousel.css";

const Carousel = () => {

  return (
    <div className="slider-wrapper">
      <p className="slider-wrapper-text">Technologies we seamlessly integrate into our works to improve customer experience</p>
      <Marquee play={true} pauseOnHover={true} speed={80} gradient={true} gradientWidth={120} gradientColor="#F8DB72" className="slider" >
        <div className="image-container">
          <img src={Adobe} alt="adobe" />
        </div>
        <div className="image-container">
          <img src={Figma} alt="figma" />
        </div>
        <div className="image-container">
          <img src={Canva} alt="canva" />
        </div>
        <div className="image-container">
          <img src={Illustrator} alt="illustrator" className="image2" />
          <h3 className="icon-text">illustrator</h3>
        </div>
        <div className="image-container">
          <img src={Photoshop} alt="photoshop" className="image2" />
          <h3 className="icon-text">Photoshop</h3>
        </div>
        <div className="image-container">
          <img src={Blender} alt="blender" className="image2" />
          <h3 className="icon-text">Blender</h3>
        </div>
      </Marquee>
    </div>
  )
}

export default Carousel