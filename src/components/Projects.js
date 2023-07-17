import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

function Projects() {

  const projects = [
    {
      screenshort: "projects/promethean.png",
      name: "Promethean 2K22",
      desc: 'Purposefully designed website for Promethean:" a national level technical event by BVRIT" where  student can register in differents events ',
      link: "https://promethean2k22.com"
    },
    {
      screenshort: "projects/Scheduler.png",
      name: "Scheduler",
      desc: "Scheduler is a web application designed to streamline appointment scheduling between faculty and students",
      link: "https://scheduler12.netlify.app/"
    },
     {
      screenshort: "projects/explorear.png",
      name: "Explore AR",
      desc: "Explore-AR is a web-based Augmented Reality (AR) application that allows users to experience AR content directly on the web without the need for any additional app or software installation.",
      link: "https://explorear.netlify.app/"
    },
    {
      screenshort: "projects/chat-editor.png",
      name: "Chat Editor",
      desc: "Chat-Editor is a chat app with additional features like making text bold, italic, underline, strike-off and also add bullets or numbers to make points and etc",
      link: "https://chat-editor.netlify.app/"
    },
    
    {
      screenshort: "projects/amazon-clone.png",
      name: "Amazon Clone",
      desc: "amazon clone made with react js and context api ",
      link: "https://duplicate-amazon.netlify.app/"
    },
    {
      screenshort: "projects/Google-clone.png",
      name: "Google Clone",
      desc: "Google clone made with ReactJS. Uses google's custom search api for search functionality",
      link: "https://duplicate-google.netlify.app/"
    },
    {
      screenshort: "projects/netflix-clone.png",
      name: "Netflix Clone",
      desc: "Netflix clone made with ReactJS. Uses TMDB apis to fetch the movies data.",
      link: "https://duplicate-netflix.netlify.app/"
    },
    {
      screenshort: "projects/login-page.png",
      name: "Login Page Design",
      desc: "Login Page design",
      link: "https://vouch-digital-assignment.netlify.app/"
    },
    {
      screenshort: "projects/snake-game.png",
      name: "Snake Game",
      desc: "A snake game made with JavaScript, where the player controls a snake to eat food and grow in length. it also stores the player's score in the browser's localStorage.",
      link: "http://snake-game-ak.netlify.app/"
    },
    {
      screenshort: "projects/music-player.png",
      name: "Music Player",
      desc: "music player made with simple HTML, CSS and JavaScript",
      link: "http://spotify-clone-ak.netlify.app/"
    },
    {
      screenshort: "projects/dinasour-game.png",
      name: "Dinasour Game",
      desc: "Dinasour Game made with HTML, CSS, JavaScript ",
      link: "http://web-dinosour-game-ak.netlify.app/"
    },
    {
      screenshort: "projects/tic-tac-tao.png",
      name: "Tic Tac Tao",
      desc: "Tic Tac Tao made with HTML, CSS, JavaScript ",
      link: "https://tic-tac-tao-ak.netlify.app/"
    },
    {
      screenshort: "projects/calculator.png",
      name: "Calculator",
      desc: "Simple calculator made with html css and js",
      link: "http://web-calculator-ak.netlify.com/"
    },
    
  ]
  const see_all = () => {
    
  }
  return (
    <div>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-container">
          {projects.map((i) => (
            <>
              <div className="project">
            <a
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={i.screenshort}
                alt="Project 1"
              />
              <div className="project-overlay">
                    <h3>{i.name}</h3>
                <p>
                  {i.desc}
                </p>
                <div className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
            </a>
          </div>
            </>
          ))}
        {/* <p onClick={see_all()}>see all</p> */}
          
          {/* Rest of the projects */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
