import React from 'react';
import "./services.css";
import Image1 from"../../assets/service-2.svg"
import Image2 from"../../assets/mobile-programming.svg"
import Image3 from"../../assets/cloud-solutions.svg"
import Image4 from"../../assets/data-analysis.svg"
import Image5 from"../../assets/version-control.svg"
import Image6 from"../../assets/ai-nlp.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Full Stack Ddevelopment",
    description:
      "Building responsive and dynamic websites using React.js, Node.js, HTML, CSS, and modern frameworks.",
  },
  {
    id: 2,
    image: Image2,
    title: "Mobile App Development",
    description:
      "Designing and developing sleek Android apps with Android Studio, Java, and Kotlin for a smooth mobile experience.",
  },
  {
    id: 3,
    image: Image3,
    title: "Cloud & Data Solutions",
    description:
      "Deploying scalable apps on AWS, analyzing data using Python and visualization tools to drive insights."
  },
  {
    id: 4,
    image: Image4,
    title: "Data Analysis & Visualization",
    description:
      " Analyzing datasets to extract insights and presenting them through compelling visualizations."
  },
  {
    id: 5,
    image: Image5,
    title: "Version Control & Collaboration",
    description:
      " Managing codebases effectively and collaborating seamlessly with teams."
  },
  {
    id: 6,
    image: Image6,
    title: "AI & NLP Fundamentals",
    description:
      "Building intelligent systems using NLP techniques like tokenization, sentiment analysis, and transformer models (BERT), with practical experience from real projects."
  }
]

const Services = () => {
  return (
  <section className="services container section" id="services">
    <h2 className="section_title">My Expertise</h2>

    <div className="services_container grid">
      {data.map(({id, image, title, description}) => {
        return(
          <div className="services_card" key={id}>
            <img src={image} alt="" className="services_img" />

            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
        </div>
        );
      })}
    </div>
  </section>
  );
}

export default Services