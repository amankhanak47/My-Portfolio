import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { BsArrowDown } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="overlay">
        <Fade top>
          <h1>Hi, I am Mohd Aman Khan</h1>
        </Fade>
        <Fade bottom>
          <p>Full Stack Developer | Computer Science Undergrad</p>
        </Fade>
        <div className="arrow-container">
          <Link to="about" smooth={true} duration={500}>
            <BsArrowDown className="arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
