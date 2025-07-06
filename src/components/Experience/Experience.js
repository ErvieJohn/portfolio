import React from 'react';
import './Experience.css';
import KCOOP_LOGO from '../../files/kcoop.png';
import SLOGIC_LOGO from '../../files/slogic.png';

function Experience() {
  return (
    <div className='experience-container'>
      <div>
        <h2 className='experience-header-title' style={{fontSize: "2.25rem"}}>WORK EXPERIENCE</h2>
        <div className="experience">
          <div className="card">
              <img src={SLOGIC_LOGO} style={{backgroundColor:"black", borderRadius: 8}}/>
              <h4 style={{fontSize: "2.2rem", fontWeight: 600}}>Junior System Engineer</h4>
              <p style={{fontStyle: 'italic'}}>
                <a href='https://slogicsolution.com/' target='_blank'>Space Logic</a>
              </p>
              <p style={{fontWeight: 'bold'}}>
                July 2024 - Present
              </p>
              {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
          </div>
        </div>

        <div className="experience">
          <div className="card">
              <img src={KCOOP_LOGO} width={75}/>
              <h4 style={{fontSize: "2.2rem", fontWeight: 600}}>Software Developer (Full-Stack Developer)</h4>
              <p style={{fontStyle: 'italic'}}>
                Web and Mobile Developer at <a href='https://kcoop.org.ph/' target='_blank'>Kasagana-Ka
                Cooperative (KCOOP)</a> 
              </p>
              <p style={{fontWeight: 'bold'}}>
                June 2023 - April 2024
              </p>
              {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
          </div>
        </div>
      </div>

      <div>
        <h2 className='experience-header-title' style={{fontSize: '1.5rem'}}>EXTRA AND CO-CURRICULAR ENGAGEMENT AND VOLUNTEER WORK</h2>
        <div className="experience">
          <div className="card">
            <h4 style={{fontSize: "1.5rem", fontWeight: 300}}>
              Participant in the PNP – ITMS Hackathon 2022 at
              Camp Rafael Crame PNP General Headquarters -
              2022
            </h4>
          </div>

          <div className="card">
            <h4 style={{fontSize: "1.5rem", fontWeight: 300}}>
              Working Online in Remotask - Annotating and
              Labeling objects - 2021
            </h4>
          </div>

          <div className="card">
            <h4 style={{fontSize: "1.5rem", fontWeight: 300}}>
              Participant in the BLUE HACKS 2020 at Ateneo De
              Manila University - 2020
            </h4>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experience