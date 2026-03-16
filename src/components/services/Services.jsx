import React from "react";
import "./services.css";
import Image1 from "../../assets/service-2.svg";
import Image2 from "../../assets/ai-nlp.svg"; // Swapped to put AI at the top
import Image3 from "../../assets/cloud-solutions.svg";
import Image4 from "../../assets/version-control.svg"; // Re-using for Backend/API
import Image5 from "../../assets/mobile-programming.svg";
import Image6 from "../../assets/data-analysis.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "AI & Machine Learning",
    description:
      "Architecting and fine-tuning intelligent NLP systems using PyTorch and Hugging Face, including custom sequence classifiers like BERT.",
  },
  {
    id: 2,
    image: Image1,
    title: "Full-Stack Architecture",
    description:
      "Building robust, highly scalable MERN stack web applications with responsive React interfaces and secure Node.js environments.",
  },
  {
    id: 3,
    image: Image3,
    title: "Cloud Deployment & MLOps",
    description:
      "Containerizing applications with Docker and deploying models and databases seamlessly across cloud providers like AWS and Hugging Face.",
  },
  {
    id: 4,
    image: Image4,
    title: "Backend & API Design",
    description:
      "Designing secure RESTful APIs, managing relational and NoSQL databases, and integrating complex third-party tools like Stripe and Google Maps.",
  },
  {
    id: 5,
    image: Image5,
    title: "Mobile App Development",
    description:
      "Developing native Android applications with Java and Kotlin, focusing on performance optimization and intuitive user experiences.",
  },
  {
    id: 6,
    image: Image6,
    title: "Data Engineering & Analysis",
    description:
      "Processing large-scale datasets, implementing data pipelines, and extracting actionable business insights using Python and SQL.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      {/* Changing the text to sound like a full-time engineer */}
      <h2 className="section_title">Core Engineering Domains</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt={title} className="services_img" />
              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
