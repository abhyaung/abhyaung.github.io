import React from 'react'
import "./about.css";
import Image from "../../assets/me-image-2.jpg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              
            <section className="about section" id="about">
              {/* <h2 className="section_title">👨‍💻 About Me</h2> */}
              

              <div className="about_container container grid">
                <div className="about_data">
                  <p className="about_description">
                    Hello! I'm <strong>Abhyaung Havale</strong> 👋, a passionate Technology Support Associate at SECA Intelligence and an aspiring Software Engineer.
                    <br /><br />
                    🎓 I'm currently pursuing my <strong>Master of Science in Computer Science</strong> at <strong>Pace University's Seidenberg School of Computer Science and Information Systems</strong>.
                    <br /><br />
                    💡 My expertise lies in:
                    <ul>
                      <li>📱 App Development</li>
                      <li>🌐 Full-Stack Engineering</li>
                      <li>☁️ Cloud Solutions</li>
                    </ul>
                    <br />
                    I'm always eager to innovate and contribute to impactful projects that drive technological advancement 🚀.
                  </p>
                </div>
              </div>
          </section>

            </p>
            {/* <a href="" className="btn">Download Resume</a> */}
          </div>

          <div className="about_skills grid">
            

           {/* skill 1 */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Front-end Development</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage frontend"></span>
              </div>
            </div>

            {/* skill 2 */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Back-End Development</h3>
                <span className="skills_number ">50%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage backend"></span>
              </div>
            </div>

            {/* skill 3 */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Android Development</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage android"></span>
              </div>
            </div>

            {/* skill 4 */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Amazon AWS</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage aws"></span>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About
