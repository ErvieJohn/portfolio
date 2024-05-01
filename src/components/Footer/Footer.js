import React from 'react';
import './Footer.css';
import MyPicture from '../../files/ervie_picture.png';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
        <footer className="container">
            <span className="blur"></span>
            <span className="blur"></span>
            <div className="column">
                <div className="logo-container">
                    <div className="logo">
                        <img className='logo-circle-image' src={MyPicture} alt={MyPicture}/>
                    </div>
                </div>
                
                <p>
                    Ervie John T. Villareal
                </p>
                <div className="socials">
                    <a href='https://www.facebook.com/erviejohn20' target='_blank' rel="noreferrer">
                        <FaFacebook size={20} color='white' />
                    </a>
                    <a href='https://www.instagram.com/erviejohn20/' target='_blank' rel="noreferrer">
                        <FaInstagram size={20} color='white' />
                    </a>
                    <a href='https://github.com/ErvieJohn' target='_blank' rel="noreferrer">
                        <FaGithub size={20} color='white' />
                    </a>
                    <a href='https://www.linkedin.com/in/ervie-john-villareal-298b33153' target='_blank' rel="noreferrer">
                        <FaLinkedin size={20} color='white' />
                    </a>
                </div>
            </div>
            {/* <div className="column">
                <h4>Company</h4>
                <a href="#">Business</a>
                <a href="#">Partnership</a>
                <a href="#">Network</a>
            </div>
            <div className="column">
                <h4>About Us</h4>
                <a href="#">Blogs</a>
                <a href="#">Channels</a>
                <a href="#">Sponsors</a>
            </div> */}
            <div className="column">
                <h4>Contact</h4>
                <div className='footer-contact'>
                    <a href="mailto:erviejohn.villareal79@gmail.com">
                        <FaEnvelope size={30} color='white' /> erviejohn.villareal79@gmail.com
                    </a>
                    <a href="tel:+639653518716">
                        <FaPhone size={30} color='white' /> +639653518716
                    </a>
                    <label className='label-location' style={{cursor: 'pointer'}}>
                        <FaLocationPin size={30} color='white' /> Phase 8A Package 11 Block 127 Lot 20 Bagong Silang Caloocan City
                    </label>
                </div>
                
            </div>
        </footer>
        <div className="copyright">
            Source Code: {" "} 
            <a href='https://github.com/ErvieJohn/portfolio' target='_blank' rel="noreferrer">
                https://github.com/ErvieJohn/portfolio
            </a>
            <br/>
            Special thanks to {" "}
            <a href='https://www.youtube.com/@AsmrProg' target='_blank' rel="noreferrer" style={{fontWeight: 'bold'}}>
                AsmrProg-YT.
            </a>
            
        </div>

        {/* <div className="copyright">
            Copyright © 2023 AsmrProg Channel. All Rights Reserved.
        </div> */}
    </div>
  )
}

export default Footer