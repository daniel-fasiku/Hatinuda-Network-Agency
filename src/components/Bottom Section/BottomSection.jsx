import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import "./BottomSection.css";

const BottomSection = () => {
    return (
        <section >
            <div className='bs-container'>
                <div className="section1">
                    <div className="content1">
                        <p className="text1">Reach Out To Us</p>
                        <p className="text2">Contact us on any of our socials below or send us a message here</p>
                    </div>
                </div>
                <div className="section2">
                    <Link to="/contact">
                        <button className='section2-button'>Send a Message</button>
                    </Link>
                    <Link to="/services">
                        <button className='section2-button2'>Explore Our Services</button>
                    </Link>
                </div>
            </div>
            <div className="content2">
                <a href="mailto:hatinudanetwork@gmail.com" rel='noreferrer noopener' className="socials1">
                    <Icon icon="logos:google-gmail" height={16} />
                    <p>hatinudanetwork@gmail.com</p>
                </a>
                <a href="https://www.instagram.com/hatinuda/" target='_blank' rel='noreferrer noopener' className="socials2">
                    <Icon icon="skill-icons:instagram" height={21} />
                    <p >@Hatinuda</p>
                </a>
                <a href="tel:+23481455771499" rel='noreferrer noopener' className="socials3">
                    <Icon icon="solar:phone-bold-duotone" height={24} color='#F8DB72' />
                    <p>+23481455771499</p>
                </a>
            </div>
        </section>
    )
}

export default BottomSection