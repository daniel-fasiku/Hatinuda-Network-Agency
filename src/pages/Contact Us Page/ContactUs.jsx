import Map from "../../assets/map.svg";
import { Icon } from '@iconify/react';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <section className="cu-section1">
        <div className="cu-section-left-cont">
          <h1 className="cu-section1-left-text1">Let&apos;s Collaborate</h1>
          <p className="cu-section1-left-text2">Talk to us about inquiries, bookings, and consultations</p>
        </div>
        <img src={Map} alt="map-image" className="cu-section1-img" />
      </section>
      <section className="cu-section2">
        <div className="cu-section2-item1">
          <p className="cu-section2-item1-text">Follow us</p>
          <div className="cu-section2-item1-icons">
            <a href="https://www.instagram.com/hatinuda/" rel="noreferrer noopener" className="icon-cont">
              <Icon icon="uil:instagram" height={15} color="black" className="icon" />
            </a>
            <a href="https://www.linkedin.com/company/hatinuda-networkk" rel="noreferrer noopener" className="icon-cont">
              <Icon icon="ri:linkedin-fill" height={15} color="black" className="icon" />
            </a>
          </div>
        </div>
        <div className="cu-section2-item2">
          <p className="cu-section2-item2-text1">Call</p>
          <div className="cu-section2-middle-icons2">
            <Icon icon="bxs:phone-call" color="#ffffff" height={26} />
            <p className="cu-section2-item2-text2">+234 8145 577 1499</p>
          </div>
        </div>
        <div className="cu-section2-item3">
          <p className="cu-section2-item2-text1">Location</p>
          <div className="cu-section2-middle-icons">
            <Icon icon="ion:location-sharp" color="#ffffff" className="cu-section2-icon" />
            <p className="cu-section2-item3-text2">7, Kuforiji Estate, Sango Ota, Ogun State, Nigeria.</p>
          </div>
        </div>
      </section>
      <section className="cu-section3">
        <h3 className="cu-section3-text1">Talk to Us</h3>
        <p className="cu-section3-text2">Send us a message today for consultations and bookings</p>
        <div className="cu-section3-item2">
          <div className="cu-section3-input-section1">
            <div className="cu-section3-input1-cont">
              <p className="cu-section3-input-text">First Name</p>
              <input type="text" placeholder="Enter your first name" className="cu-section3-input1" />
            </div>
            <div className="cu-section3-input1-cont">
              <p className="cu-section3-input-text">Last Name</p>
              <input type="text" placeholder="Enter your last name" className="cu-section3-input1" />
            </div>
          </div>
          <div className="cu-section3-input1-cont2">
            <p className="cu-section3-input-text">E-mail Address</p>
            <input type="text" placeholder="Enter your e-mail address" className="cu-section3-input2" />
          </div>
          <div className="cu-section3-input1-cont2">
            <p className="cu-section3-input-text">Message</p>
            <textarea type="text" placeholder="Write a message to us...." className="cu-section3-input3" />
          </div>
          <button className="cu-section3-send-button">Send</button>
        </div>
      </section>
    </div>
  )
}

export default ContactUs