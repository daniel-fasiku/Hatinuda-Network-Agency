import Aboutpic1 from "../../assets/aboutpic1.svg";
import Aboutpic2 from "../../assets/aboutpic2.svg";
import Aboutpic3 from "../../assets/aboutpic3.svg";
import Aboutpic4 from "../../assets/about4.svg";
import GoalsPic from "../../assets/goals-pic.svg";
import { team } from "../../data.js";
import BottomSection from "../../components/Bottom Section/BottomSection.jsx";
import Footer from "../../components/Footer/Footer";
import "./aboutus.css";

const aboutus = () => {
  return (
    <div className="about-us-container">
      <section className="about-section1">
        <div className="ab-sec1-left-cont">
          <div className="sec1-left-top-cont">
            <img src={Aboutpic1} alt="img1" className="sec1-img1" />
            <img src={Aboutpic2} alt="img2" className="sec1-img2" />
          </div>
          <img src={Aboutpic3} alt="img3" className="sec1-img3" />
        </div>
        <div className="ab-sec1-right-cont">
          <h1 className="sec1-right-text1">we always prioritize quality and <span className="sec1-right-span">customer satisfaction</span></h1>
          <p className="sec1-right-text2">Hatinuda Network is a leading creative agency that specializes in using creativity, innovation and technology to influence and transform culture on a global scale. We pride ourselves in creating unique venue for our clients, differentiating them from their competitors through our creative solutions</p>
          <img src={Aboutpic4} alt="img4" className="sec1-right-img" />
        </div>
      </section>
      <section className="about-section2">
        <h1 className="about-section2-text1">we work with only the <span className="about-section2-span">best team</span> & <span className="about-section2-span">leads</span></h1>
        <div className="team">
          {
            team.map(({ imagePath, name, title, index }) => {
              return (
                <div className="team-image-container" key={index}>
                  <img src={imagePath} alt="team" className="team-image" />
                  <p className="team-name">{name}</p>
                  <p className="team-title">{title}</p>
                </div>
              )
            })
          }
        </div>
        <div className="team-info">
          <p className="team-info-text">At Hatinuda Network, we have assembled a team of remarkably talented individuals who possess an unwavering passion for their craft. The Team shares a common purpose to create awe-inspiring experiences that resonate deeply with audiences and leave a lasting impression.</p>
        </div>
      </section>
      <section className="about-section3">
        <div className="about-section3-top">
          <div className="ab-section3-text-cont">
            <h1 className="ab-section3-text1"><span className="ab-section3-span">Our Goals</span> & Mission</h1>
            <p className="ab-section3-text2">Our vision is to create a unique value for our clients that will differentiate them from their competitors</p>
          </div>
          <div className="ab-section3-image-cont">
            <img src={GoalsPic} alt="goals" className="ab-section3-image" />
          </div>
        </div>
        <div className="about-section3-bottom">
          <div className="ab-section3-bottom-text-cont1">
            <h3 className="ab-section3-bottom-text1">01</h3>
            <p className="ab-section3-bottom-text2">Deliver Exceptional Creativity: Create visually stunning, thought-provoking, and impactful creative works that captivate audiences, evoke emotions, and leave a lasting impression.</p>
          </div>
          <div className="ab-section3-bottom-text-cont2">
            <h3 className="ab-section3-bottom-text1">02</h3>
            <p className="ab-section3-bottom-text2">Drive Innovation: Foster a culture of innovation within the creative industry, exploring new technologies, techniques, and trends to push the boundaries of creativity and stay at the forefront of the industry.</p>
          </div>
          <div className="ab-section3-bottom-text-cont3">
            <h3 className="ab-section3-bottom-text1">03</h3>
            <p className="ab-section3-bottom-text2">Provide Strategic Solutions: Collaborate closely with clients to understand their unique goals and challenges, and deliver tailor-made creative solutions that drive tangible results and contribute to their overall success.</p>
          </div>
        </div>
      </section>
      <BottomSection />
      <Footer />
    </div>
  )
}

export default aboutus