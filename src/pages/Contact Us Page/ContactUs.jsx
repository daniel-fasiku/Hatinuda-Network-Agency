import { useRef } from 'react';
import Map from "../../assets/map.svg";
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import 'react-toastify/dist/ReactToastify.css';
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bj0wq37', 'template_fk7bz3p', form.current, {
        publicKey: 'CHsfcMwRuAQxJF0Vq',
      })
      .then(
        () => {
          toast.success('Message Sent Successfully!', {
            className: "toast-success",
            hideProgressBar: true
          });
          console.log('SUCCESS!');
          console.log("Message Sent");
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.', {
            className: "toast-fail",
            hideProgressBar: true
          });
          console.log('FAILED...', error.text);

        },
      );
  };

  return (
    <div className="contact-us-container">
      <motion.section
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="cu-section1">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="cu-section-left-cont">
          <h1 className="cu-section1-left-text1">Let&apos;s Collaborate</h1>
          <p className="cu-section1-left-text2">Talk to us about inquiries, bookings, and consultations</p>
        </motion.div>
        <img src={Map} alt="map-image" className="cu-section1-img" />
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="cu-section2">
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
      </motion.section>
      <section className="cu-section3">
        <h3 className="cu-section3-text1">Talk to Us</h3>
        <p className="cu-section3-text2">Send us a message today for consultations and bookings</p>
        <form className="cu-section3-item2" ref={form} onSubmit={sendEmail}>
          <div className="cu-section3-input-section1">
            <div className="cu-section3-input1-cont">
              <label className="cu-section3-input-text">First Name</label>
              <input type="text" name="first_name" placeholder="Enter your first name" className="cu-section3-input1" />
            </div>
            <div className="cu-section3-input1-cont">
              <label className="cu-section3-input-text">Last Name</label>
              <input type="text" name="last_name" placeholder="Enter your last name" className="cu-section3-input1" />
            </div>
          </div>
          <div className="cu-section3-input1-cont2">
            <label className="cu-section3-input-text">E-mail Address</label>
            <input type="email" name="user_email" placeholder="Enter your e-mail address" className="cu-section3-input2" />
          </div>
          <div className="cu-section3-input1-cont2">
            <label className="cu-section3-input-text">Message</label>
            <textarea name="message" placeholder="Write a message to us...." className="cu-section3-input3" />
          </div>
          <button type="submit" value="Send" className="cu-section3-send-button">Send</button>
        </form>
        <ToastContainer />
      </section>
    </div>
  )
}

export default ContactUs