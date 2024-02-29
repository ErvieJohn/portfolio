import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Typewriter from 'typewriter-effect';

function Home() {
  
  const positions = ["Computer Engineer", "Software Developer", "System Administrator"]

  return (
    <div> 
      
      <section className='home-image' id='page-front'>
        <Navbar />
        <div className='home-image-content'>
            <div className='home-text-content'>
                <text className='home-text-name' style={{ color: 'white' }}>Hi, I'm Ervie John</text>
                <div style={{display: "flex", flexDirection: "row", gap: 15, alignItems: "center"}}>
                  <text className='home-text-course' style={{ color: 'blue' }}>I am a </text>
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
                
                
                
                <text className='home-text-description' style={{ color: 'white' }}>
                    Ito pogi langs! eyyyyy.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut congue sodales vulputate. Duis a dapibus elit. Nullam 
                    et libero nunc. Curabitur vulputate lectus arcu, nec 
                    tempor ex ullamcorper eu.
                </text>              
            
            </div>
            
        </div>
      </section>

      <section className='page-about' id="page-about">
        <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
          <text style={{color: "black"}}>
            Hello World!
          </text>
        </div>
      </section>
      
    </div>
  )
}

export default Home