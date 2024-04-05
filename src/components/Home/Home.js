import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import About from '../About/About';
import Experience from '../Experience/Experience';
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';

function Home() {
  
  const positions = ["Computer Engineer", "Software Developer", "System Administrator"]

  return (
    <div> 
      <Navbar />
      <section className='home-image' id='page-front'>
        
        <div className='home-image-content'>
            <div className='home-text-content'>
                <label className='home-text-name' style={{ color: 'white' }}>
                  Hi, I'm {" "}
                  <span>
                    Ervie John
                  </span>
                </label>
                <div style={{display: "flex", flexDirection: "row", gap: 15, alignItems: "center"}}>
                  <label className='home-text-course' style={{ color: 'blue' }}>I am a </label>
                  <div className='home-text-course' style={{ color: '#00abf0' }}>
                    <Typewriter
                      className='home-text-course' 
                      style={{ color: '#00abf0' }}
                      options={{
                        strings: positions,
                        autoStart: true,
                        loop: true,
                        delay: 100,
                      }}
                    />
                  </div>
                </div>                
                
                <label className='home-text-description' style={{ color: 'white', textAlign: 'justify' }}>
                    A programmer with knowledge of Full-Stack Software
                    Development and experience in both web and mobile
                    development. Focused on using technical skills and smart
                    problem-solving approaches to work on different projects
                    in the tech world.
                </label>  

                <div style={{marginTop: 15, display: "flex", flexDirection: "row", gap: 20}}>
                  <a href='https://www.facebook.com/erviejohn20' target='_blank'>
                    <FaFacebook size={50} color='white' />
                  </a>
                  <a href='https://github.com/ErvieJohn' target='_blank'>
                    <FaGithub size={50} color='white' />
                  </a>
                  <a href='https://www.linkedin.com/in/ervie-john-villareal-298b33153' target='_blank'>
                    <FaLinkedin size={50} color='white' />
                  </a>
                  {/* <a href='https://www.jobstreet.com.ph/profile/erviejohn-villareal-7dLQxc0QRz' target='_blank'>
                    <FaJobs size={50} color='white' />
                  </a> */}
                </div>            
            
            </div>
            
            
        </div>
      </section>

      <section className='page-experience' id="page-experience" style={{backgroundColor: "#94a2a6", backgroundImage: "linear-gradient(180deg, #94a2a6 0%, #000000 100%)"}}>
        <Experience />
      </section>

      <section className='page-about' id="page-about" style={{backgroundColor: "#94a2a6", backgroundImage: "linear-gradient(180deg, #94a2a6 0%, #000000 100%)"}}>
        <About />
      </section>
      
    </div>
  )
}

export default Home