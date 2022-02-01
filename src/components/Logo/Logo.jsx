import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
  return (
  <div className="ma4 mt0">
    <Tilt className='br2 shadow-2'>
          <div className="pa3" style={{ height: '150px', width: '150px' }}>
            <img src="https://images.fineartamerica.com/images-medium-large-5/human-brain-in-blue-transparent-head-ikon-ikon-images.jpg" alt="Logo" />   
          </div>
      </Tilt>
  </div>
  )
};

export default Logo;
