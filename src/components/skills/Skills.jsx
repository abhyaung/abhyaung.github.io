import React from 'react';
import './skills.css';
import Reveal from '../shared/Reveal';

const rows = [
  ['Languages', 'Java (11, 17, 21), Python, TypeScript, JavaScript, SQL, some C++'],
  ['Backend', 'Spring Boot, Spring Cloud, Node.js and Express, Hibernate (JPA), REST, GraphQL, gRPC'],
  ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS, Material UI'],
  ['Data and messaging', 'PostgreSQL, Supabase, MySQL, MongoDB, Redis, DynamoDB, Apache Kafka, RabbitMQ'],
  ['Cloud and delivery', 'AWS (EKS, ECS, S3, Lambda, SQS), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, Vercel'],
  ['Applied AI', 'LLM application integration, agent workflows, RAG, prompt and model configuration, Deepgram STT, ElevenLabs TTS, Ollama, PyTorch, Hugging Face'],
  ['Certifications', 'AWS Certified Solutions Architect, Associate. AWS Certified Cloud Practitioner.'],
];

const Skills = () => (
  <section className="skills section" id="skills">
    <div className="container">
      <Reveal className="section_head">
        <h2 className="section_title">What I work with</h2>
        <p className="section_lead">
          Deepest in Java, event-driven services and cloud delivery, with hands-on production work connecting LLM and
          speech systems to reliable application infrastructure.
        </p>
      </Reveal>

      <Reveal>
        <dl className="skills_rows">
          {rows.map(([label, text]) => (
            <div className="skills_row" key={label}>
              <dt>{label}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default Skills;
