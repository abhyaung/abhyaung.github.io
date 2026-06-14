import React from "react";
import "./about.css";
import Image from "../../assets/me-image-2.jpg";

const About = () => {
  // Expanded categories encompassing all academic studies, enterprise experience, and architecture goals
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Java (11/17/21)",
        "Python",
        "TypeScript",
        "JavaScript",
        "C++",
        "SQL",
      ],
    },
    {
      title: "Frontend & Backend",
      skills: [
        "Spring Boot",
        "Node.js & Express",
        "React.js",
        "Next.js",
        "GraphQL & gRPC",
        "Hibernate (JPA)",
        "Tailwind CSS & MUI",
      ],
    },
    {
      title: "Databases & Messaging",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis & DynamoDB",
        "Apache Kafka",
        "RabbitMQ",
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      skills: [
        "AWS",
        "Docker & Kubernetes",
        "Terraform",
        "CI/CD (Jenkins)",
        "Linux (Ubuntu) & Vim",
        "Git & GitHub",
        "Vercel",
      ],
    },
    {
      title: "AI, GenAI & ML",
      skills: [
        "OpenAI APIs & RAG",
        "Agentic AI & MCP",
        "Ollama (Local LLMs)",
        "PyTorch & Hugging Face",
        "Streamlit",
      ],
    },
    {
      title: "Certifications & Architecture",
      skills: [
        "AWS Solutions Architect (SAA-C03) Studies",
        "AWS Cloud Practitioner",
        "AWS Generative AI",
        "Scalable Cloud Architecture",
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
              <br />A <strong>Full Stack Developer</strong> currently engineering scalable portfolio and trade processing microservices at <strong>Northern Trust</strong>. Holding a <strong>Master of Science in Computer Science</strong> from Pace University, I specialize in building secure, high-performance applications using modern cloud-native architectures.
              <br />
              <br />
              💡 <strong>Core Expertise:</strong>
            </p>

            <ul className="expertise_list">
              <li>
                ☕ <strong>Backend & Architecture:</strong>
                <br></br> Java 21, Spring Boot, Node.js, Event-Driven Design (Kafka)
              </li>
              <li>
                💻 <strong>Frontend Development:</strong>
                <br></br> React.js, TypeScript, Next.js, Tailwind CSS
              </li>
              <li>
                ☁️ <strong>Cloud & DevOps:</strong>
                <br></br> AWS Infrastructure, Kubernetes (EKS), Docker, Linux
              </li>
              <li>
                🧠 <strong>AI Integration & ML:</strong>
                <br></br> Local LLM Orchestration, Agentic AI, PyTorch, OpenAI APIs
              </li>
            </ul>

            <p className="about_description" style={{ marginTop: "1rem" }}>
              I thrive in cross-functional teams, driving end-to-end development while leveraging GenAI capabilities and robust cloud architectures to enhance system intelligence and data-driven features. 🚀
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