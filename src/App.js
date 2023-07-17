import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import GetTouch from './components/GetTouch'
import Footer from './components/Footer'



import './App.css';


const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll distance as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    

    <div className={`App ${scrolled ? 'scrolled' : ''}`}>
    <Header />
    <Element name="home">
      <Home />
    </Element>
    <Element name="about">
    <About/>
    </Element>
    <Element name="resume">
      <Resume/>
    </Element>
    <Element name="skills">
     <Skills/>
    </Element>
    <Element name="projects">
     <Projects/>
    </Element>
    <Element name="contact">
     <GetTouch/>
    </Element>
    <Element name="footer">
     <Footer/>
    </Element>

 
   
  </div>
  

  );
}

export default App;
