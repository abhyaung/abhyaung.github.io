// Dates and titles follow the July 2026 resume (public/Abhyaung_Havale_Resume.pdf).
const experience = [
  {
    id: 'bbtt',
    year: 'Jun 2026 – now',
    title: 'Software Developer',
    org: 'Built By The Trades · Remote, USA',
    desc: [
      'Own engineering delivery for Goose, a production AI call-intelligence platform combining LLM scoring, speech pipelines, real-time services and native mobile capture.',
      'Ship multi-tenant SaaS across Next.js, TypeScript, PostgreSQL, Redis, BullMQ and Socket.IO, including RBAC, OAuth integrations and production release gates.',
      'Built the iOS background-recording integration in Swift and delivered voice capture into asynchronous transcription and analysis workflows.',
    ],
  },
  {
    id: 'nt',
    year: 'Jul 2025 – Jun 2026',
    title: 'Software Engineer',
    org: 'Insight Nova Solutions, on a Northern Trust engagement · USA',
    desc: [
      'Engineered portfolio and trade-processing microservices with Java 21, Spring Boot and Spring Cloud.',
      'Delivered Kafka and SQS event workflows, concurrent batch processing, Redis performance improvements, and OAuth2/JWT security on AWS EKS.',
    ],
  },
  {
    id: 'ps',
    year: 'Feb 2021 – Aug 2023',
    title: 'Java Developer',
    org: 'Persistent Systems · Pune, India',
    desc: [
      'Joined as a Software Engineer Trainee while finishing the B.Sc., then converted to a full-time Java Developer.',
      'Built backend services for a digital lending and payments system with Java 11, Spring Boot and Hibernate; integrated credit-score and banking APIs; used Kafka and RabbitMQ for real-time loan and payment processing.',
    ],
  },
];

const education = [
  {
    id: 'pace',
    year: 'Sep 2023 – May 2025',
    title: 'M.S. Computer Science',
    org: 'Pace University · New York, USA',
    desc: [
      'Coursework in artificial intelligence, cloud computing architectures and distributed systems.',
      'Capstone work on local LLM inference engines, asynchronous data pipelines and highly available microservices.',
    ],
  },
  {
    id: 'sppu',
    year: 'Jul 2019 – Dec 2022',
    title: 'B.Sc. Computer Science',
    org: 'Savitribai Phule Pune University · Pune, India',
    desc: ['Data structures, algorithms, software engineering and database systems. CGPA 7.9.'],
  },
];

export { experience, education };
