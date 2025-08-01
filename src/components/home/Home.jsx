import React from 'react'
import "./home.css";
import Me from "../../assets/me-image.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
// import Resume from '../../assets/Abhyaung - Resume.pdf';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className='intro'>
        <img src={Me} alt=""  className="home_img" />
        <h1 className="home_name">Hi, I’m <span className="highlight">Abhyaung Havale</span></h1>
        <span className="home_education">M.S. Computer Science Student @ Pace University  
      • Full-Stack Web & Mobile Developer (React JS, Android)  
      • C++ | Java | Python | Data Analysis Enthusiast </span>

        <HeaderSocials />

        <a href={`${process.env.PUBLIC_URL}/Abhyaung_Havale_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn">
          📄Resume
        </a>

        {/* <a href="../../assets/Abhyaung_Havale_Resume.pdf" download className="btn">
          📄 Download Resume
        </a>
        <br></br>
        <br></br>
        <a href="../../assets/Abhyaung_Havale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          👀 View Resume
        </a> */}

        {/* <a href="/Abhyaung_Havale_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn">📄 Download Resume</a> */}


        {/* <a href='Resume' download target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a> */}

        {/* <a href="../../assets/Abhyaung - Resume.pdf" className="btn">Resume</a> */}

        
      </div>
      <Shapes />
    </section>
  )
}

export default Home