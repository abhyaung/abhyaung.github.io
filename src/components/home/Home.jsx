import React from 'react'
import "./home.css";
import Me from "../../assets/me-image.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className='intro'>
        <img src={Me} alt=""  className="home_img" />
        <h1 className="home_name">Abhyaung Havale</h1>
        <span className="home_education">I am a Computer Science Student</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home