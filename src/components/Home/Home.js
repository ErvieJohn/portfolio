import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

function Home() {
    

  return (
    <div> 
      
      <section className='home-image'>
        <Navbar />

        <div className='home-image-content'>
            <div className='home-text-content'>
                <text className='home-text-name' style={{ color: 'white' }}>Hi, I'm Ervie John</text>
                <text className='home-text-course' style={{ color: '#00abf0' }}>Computer Engineer</text>
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
      <div>
        Hello World!
      </div>
    </div>
  )
}

export default Home