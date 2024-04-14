import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import Experience from '../Experience/Experience';
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';

function Home() {
  
  const positions = ["Computer Engineer", "Software Developer", "System Administrator"]

  return (
    <div> 
      <Navbar />
      <header className='home-image' id='page-front'>
        <span className="blur"></span>
        <span className="blur"></span>
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
      </header>

      <section className='page-education container' id="page-education">
        <h2 className='header-title'>EDUCATION</h2>
        <Education />
      </section>

      <section className='page-projects container' id="page-projects">
        <h2 className='header-title'>DESIGN PROJECTS</h2>
        <Projects />
      </section>

      <section className='page-experience container' id="page-experience">
        {/* <h2 className='header-title'>WORK EXPERIENCE</h2> */}
        <Experience />
      </section>
      
    </div>
  )
}

export default Home