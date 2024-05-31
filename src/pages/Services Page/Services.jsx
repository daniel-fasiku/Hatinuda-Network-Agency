import Brand from "../../assets/braanding.svg";
import Advert from "../../assets/adverttising.svg";
import Social from "../../assets/social.svg";
import Analytics from "../../assets/analytics.svg";
import { services } from "../../data.js";
import { services2 } from "../../data.js";
import { services3 } from "../../data.js";
import { services4 } from "../../data.js";
import { services5 } from "../../data.js";
import { services6 } from "../../data.js";
import { works } from "../../data.js";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <section className="sv-section1-cont">
        <div className="sv-section1">
          <div className="sv-section1-content1">
            <div className="sv-section1-content1-img-cont">
              <img src={Analytics} alt="brand-icon" className="sv-section1-content1-img" />
            </div>
            <div className="sv-section1-content1-text-cont">
              <p className="sv-section1-content1-text1">Event Management</p>
              <p className="sv-section1-content1-text2">Planning and strategizing events to ensure their success.</p>
            </div>
          </div>
          <div className="sv-section1-content1">
            <div className="sv-section1-content1-img-cont">
              <img src={Social} alt="brand-icon" className="sv-section1-content1-img" />
            </div>
            <div className="sv-section1-content1-text-cont">
              <p className="sv-section1-content1-text1">Social Media Management</p>
              <p className="sv-section1-content1-text2">We help you handle and manage your social media accounts, which results in more traffic and engagement.</p>
            </div>
          </div>
          <div className="sv-section1-content1">
            <div className="sv-section1-content1-img-cont">
              <img src={Advert} alt="brand-icon" className="sv-section1-content1-img" />
            </div>
            <div className="sv-section1-content1-text-cont">
              <p className="sv-section1-content1-text1">Influencer Management</p>
              <p className="sv-section1-content1-text2">We got you covered if you decide to use social media to support your marketing and sales cycle.</p>
            </div>
          </div>
          <div className="sv-section1-content1">
            <div className="sv-section1-content1-img-cont">
              <img src={Brand} alt="brand-icon" className="sv-section1-content1-img" />
            </div>
            <div className="sv-section1-content1-text-cont">
              <p className="sv-section1-content1-text3">Advertising/Branding</p>
              <p className="sv-section1-content1-text2">We assist you in creating a solid brand by enhancing your online presence, business culture, product quality, website and marketing, taglines and slogans, and customer service.</p>
            </div>
          </div>
        </div>
      </section>
     <section className="sv-section2">
        <div className="sv-section2-item1">
          {
            services.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <img src={imagePath} alt="services-pic" className="sv-section2-img" />
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="sv-section2-item2">
          {
            services2.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                  <img src={imagePath} alt="services-pic" className="sv-section2-img" />
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="sv-section3">
        <div className="sv-section2-item1">
          {
            services3.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <img src={imagePath} alt="services-pic" className="sv-section3-img2" />
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="sv-section2-item2">
          {
            services4.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                  <img src={imagePath} alt="services-pic" className="sv-section3-img2" />
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="sv-section4">
        <div className="sv-section2-item1">
          {
            services5.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <img src={imagePath} alt="services-pic" className="sv-section2-img" />
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="sv-section2-item2">
          {
            services6.map(({ imagePath, title, title2, info, id }) => {
              return (
                <div className="sv-section2-content1" key={id}>
                  <div className="sv-section2-text-cont">
                    <h3 className="sv-section2-text1">{title} <span className="sv-section2-span">{title2}</span></h3>
                    <p className="sv-section2-text2">{info}</p>
                  </div>
                  <img src={imagePath} alt="services-pic" className="sv-section2-img" />
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="sv-section5">
        <h1 className="sv-section5-text1">Some Of  <span className="sv-section5-span"> Our Works</span></h1>
        <div className="sv-section5-item2-cont">
          {
            works.map(({ imagePath, info, index }) => {
              return (
                <div className="sv-section5-content" key={index}>
                  <img src={imagePath} alt="works-image" className="sv-section5-img" />
                  <p className="sv-section5-text2">{info}</p>
                </div>
              )
            })
          }
        </div>
      </section> 
    </div>
  )
}

export default Services