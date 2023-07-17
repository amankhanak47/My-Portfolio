import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    "/skills/php.svg",
    "/skills/nodejs.svg",
    "/skills/expressjs.svg",
    "/skills/reactjs.svg",
    "/skills/mongodb.svg",
    "/skills/mysql.png",
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/bootstrap.svg",
    "/skills/docker.svg",
    "/skills/xml.png",
    "/skills/wordpress.svg",
    "/skills/aws.svg",
    "/skills/java.svg",
    "/skills/c.svg",
    "/skills/python.svg",
  ]
  return (

      
 <div className='Skill'>   

<section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((i) => 
          <div className="skill">
            <img src={i} alt={i} className="skill-image" />
          </div>
          )}
          {/* Add more skills as needed */}
        </div>
      </section>

  </div>
  )
}

export default Skills
