import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import About from '../About/About';
import Experience from '../Experience/Experience';
import { FaFacebook } from "react-icons/fa6";

function Home() {
  
  const positions = ["Computer Engineer", "Software Developer", "System Administrator"]

  return (
    <div> 
      <Navbar />
      <section className='home-image' id='page-front'>
        
        <div className='home-image-content'>
            <div className='home-text-content'>
                <label className='home-text-name' style={{ color: 'white' }}>Hi, I'm Ervie John</label>
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
                
                
                
                <label className='home-text-description' style={{ color: 'white' }}>
                    Ito pogi langs! eyyyyy.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut congue sodales vulputate. Duis a dapibus elit. Nullam 
                    et libero nunc. Curabitur vulputate lectus arcu, nec 
                    tempor ex ullamcorper eu.
                </label>              
            
            </div>

            <FaFacebook size={50} />
            
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