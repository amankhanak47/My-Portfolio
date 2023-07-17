

import React from 'react';

import './Footer.css';
import { Link } from 'react-scroll';



function Footer() {


  
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://instagram.com/amaan_.xd_07?igshid=MzRlODBiNWFlZA=="><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" alt="Facebook" /></a>
        <a href="https://www.linkedin.com/in/mohd-aman-khan-28b325236/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="LinkedIn" /></a>
        <a href="https://github.com/amankhanak47"><img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="GitHub" /></a>
      </div>
      <div className="rocket-section">
        <Link to="home" smooth={true} duration={1000} className="rocket-wrapper">
          <img className="rocket" src="https://iheartcraftythings.com/wp-content/uploads/2021/05/How-to-Draw-Rocket-%E2%80%93-Featured-Image.jpg" alt="Rocket" />
          <div className="rocket-text">Beam up, Scotty!</div>
        </Link>
      </div>
     
      
      <div className="copyright-info">
        <p>
          &#169; All Rights Reserved By Mohd Aman Khan - Copyright 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;


