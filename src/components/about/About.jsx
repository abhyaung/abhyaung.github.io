import React from "react";
import "./about.css";
import Image from "../../assets/me-image-2.jpg";

const About = () => {
  // Categorized skills for a modern, clean UI
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "SQL",
        "MongoDB",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "PyTorch",
        "Hugging Face",
        "Streamlit",
      ],
    },
    {
      title: "Cloud, Tools & APIs",
      skills: [
        "AWS",
        "Docker",
        "Git & GitHub",
        "Linux (Ubuntu)",
        "Stripe",
        "Google Maps",
      ],
    },
    {
      title: "Certifications",
      skills: [
        "AWS Cloud Practitioner",
        "AWS Generative AI",
        "AWS Solutions Architect (In Progress)",
      ],
    },
  ];

  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="Abhyaung Havale" className="about_img" />

        <div className="about_data">
          <div className="about_info">
            <p className="about_description">
              Hello! I'm <strong>Abhyaung Havale</strong> 👋
              <br />
              <br />A Software Engineer and recent{" "}
              <strong>Master of Science in Computer Science</strong> graduate
              from <strong>Pace University</strong>. Based in the Jersey City /
              NYC metropolitan area, I specialize in building intelligent,
              scalable applications—from fine-tuning machine learning models for
              natural language processing to architecting secure, full-stack web
              platforms.
              <br />
              <br />
              💡 <strong>Core Expertise:</strong>
            </p>

            <ul className="expertise_list">
              <li>
                🧠 <strong>AI & Machine Learning:</strong>
                <br></br> NLP, PyTorch, Hugging Face
              </li>
              <li>
                💻 <strong>Full-Stack Architecture:</strong>
                <br></br> React.js, Node.js, MERN Stack
              </li>
              <li>
                ☁️ <strong>Cloud & MLOps:</strong>
                <br></br> Docker, API Integration, Streamlit
              </li>
              <li>
                🛠️ <strong>Software Engineering:</strong>
                <br></br> Scalable System Design & App Development
              </li>
            </ul>

            <p className="about_description" style={{ marginTop: "1rem" }}>
              I am actively looking to join a driven engineering team where I
              can build impactful, data-driven solutions. 🚀
            </p>
          </div>

          {/* Modern Skills Section */}
          <div className="about_skills-modern">
            <h3 className="skills_heading">Technical Arsenal</h3>
            <div className="skills_grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill_group">
                  <h4 className="skill_group_title">{category.title}</h4>
                  <div className="skill_pills">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill_pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
