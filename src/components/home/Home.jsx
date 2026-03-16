import React from "react";
import "./home.css";
import Me from "../../assets/me-image.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">
          Hi, I’m <span className="highlight">Abhyaung Havale</span>
        </h1>
        <span className="home_education">
          {" "}
          Software Engineer & M.S. CS Graduate from Pace University <br />
          Building scalable full-stack platforms and intelligent AI-driven
          solutions. <br />
          React | Node.js | Python | AWS{" "}
        </span>
        <HeaderSocials />
        <a
          href={`${process.env.PUBLIC_URL}/Abhyaung_Havale_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📄Resume
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
