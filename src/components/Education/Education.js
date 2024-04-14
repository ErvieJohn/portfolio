import React from 'react';
import './Education.css';
import TIP_LOGO from '../../files/tip_logo.png';
import STSN_LOGO from '../../files/stsn_logo.jpg';
import TALA_LOGO from '../../files/tsh_logo.jpg';

function Education() {
  return (
    <div className="education">
        <div className="card">
            <span>
                <img src={TALA_LOGO} width={50} height={50}/>
            </span>
            <h4>Tala High School</h4>
            <p style={{fontStyle: 'italic'}}>
                Junior High School
            </p>
            <p>
                Completed in 2016
            </p>
            {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
        </div>

        <div className="card">
            <span>
                <img src={STSN_LOGO} width={50} height={50}/>
            </span>
            <h4>St. Theresa’s School of Novaliches</h4>
            <p style={{fontStyle: 'italic'}}>
                Senior High School - STEM (Science, Technology, Engineering and Mathematics)
            </p>
            <p>
                Completed in 2018
            </p>
            {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
        </div>

        <div className="card">
            <span>
                <img src={TIP_LOGO} width={50} height={50}/>
            </span>
            <h4>Technological Institute of the Philippines</h4>
            <p style={{fontStyle: 'italic'}}>
                BS Computer Engineering
            </p>
            <p>
                Completed in 2022
            </p>
            {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
        </div>

    </div>
  )
}

export default Education