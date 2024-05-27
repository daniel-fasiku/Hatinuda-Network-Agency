import Block from "../../assets/block.png";
import Brand from "../../assets/braanding.svg";
import Advert from "../../assets/adverttising.svg";
import Social from "../../assets/social.svg";
import Analytics from "../../assets/analytics.svg";
import vision from "../../assets/vision.svg";
import Ceo from "../../assets/ceo-profile.svg";
import "./homepage.css";
import Header from "../../components/Header/Header";
import Carousel from '../../components/Logo Carousel/Carousel';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BottomSection from "../../components/Bottom Section/BottomSection";

const homepage = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className="carousel"><Carousel /></div>
      <section className='body1'>
        <div className="section-1-container">
          <div>
            <img src={Block} alt="block" className="block" />
          </div>
          <h1 className="left-text1">Quality <span className="left-text-span">And</span> Customer Satisfaction <span className="left-text-span">Are Always Our</span> Top Priorities</h1>
          <p className="left-text2">Hatinuda network is a leading creative agency that specializes in using creativity,
            innovation and technology to influence and transform culture on global scale.
            We pride ourselves in creating unique value for our clients, differentiating them
            from their competitors through our creative solutions</p>
          <Link to="/about" className="learn-more-container">
            <p className="learn-more-text">Learn More</p>
            <GoArrowUpRight size={20} color="#F8DB72" className="learn-more-arrow" />
          </Link>
        </div>
        <div className="second-section">
          <div className="second-section-element">
            <div className="second-section-icon-container">
              <img src={Brand} alt="brand" className="second-section-icon" />
            </div>
            <p className="second-section-text">Branding</p>
          </div>
          <div className="second-section-element">
            <div className="second-section-icon-container">
              <img src={Advert} alt="advert" className="second-section-icon" />
            </div>
            <p className="second-section-text">Advertising</p>
          </div>
          <div className="second-section-element">
            <div className="second-section-icon-container">
              <img src={Social} alt="social" className="second-section-icon" />
            </div>
            <p className="second-section-text">Social Media Management</p>
          </div>
          <div className="second-section-element">
            <div className="second-section-icon-container">
              <img src={Analytics} alt="analytics" className="second-section-icon" />
            </div>
            <p className="second-section-text">Social Analytics</p>
          </div>
        </div>
      </section>
      <section className="body2">
        <div className="body2-section2">
          <h1 className="body2-section2-text1">Vision <span className="body2-section2-span">&</span> Mission <span className="body2-section2-span">Statements</span></h1>
          <Link to="/about" className="learn-more-container2">
            <p className="learn-more-text">Learn More</p>
            <GoArrowUpRight size={20} color="#F8DB72" />
          </Link>
          <p className="body2-section2-text2">Our vision is to create a unique value for our clients that will differentiate them from their competitors. Our mission at Hatinuda Network is to use technology, innovation, and creativity to influence and transform cultures all around the world.</p>
        </div>
        <div className="body2-section1">
          <img src={vision} alt="vision" className="body2-icon" />
        </div>
      </section>
       <section className="body3">
        <div className="body3-section1">
          <h1 className="body3-section1-text1">What We Stand For And <span className="body3-section1-span">Plan To Achieve</span></h1>
          <div className="body3-section1-element2">
            <img src={Ceo} alt="ceo-profile-pic" className="ceo-profile-pic" />
            <div className="element2-text-cont">
              <p className="element2-text1">Cornelius Ayanfe Adetutu</p>
              <p className="element2-text2">CCO, MD</p>
            </div>
          </div>
          <Link to="/about" className="learn-more-container3">
            <p className="learn-more-text">Learn More</p>
            <GoArrowUpRight size={20} color="#F8DB72" />
          </Link>
        </div>
        <div className="body3-section2">
          <p className="body3-section2-text">Hatinuda Network stands as a testament to the boundless potential that resides within the heart
            of Nigeria's creative landscape. We believe in the power of imagination, the ability to transform concepts into captivating realities, and the strength of collaboration to bring visions to life.
            We are driven by a relentless pursuit of excellence, constantly pushing the boundaries of innovation,
            and challenging the status quo.</p>
          <p className="body3-section2-text2">Our agency is founded on the principles of authenticity, originality,
            and a deep understanding of our clients' unique needs. We are committed to providing creative solutions
            that not only captivate audiences but also leave an indelible mark on the cultural fabric of Africa and beyond.</p>
        </div>
      </section>
      <BottomSection/>
      <Footer/> 
    </div>
  )
}

export default homepage