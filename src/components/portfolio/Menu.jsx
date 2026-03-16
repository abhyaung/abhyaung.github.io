import Work1 from "../../assets/threat-detection.svg";
import Work2 from "../../assets/carpool-logo.svg";
import Work3 from "../../assets/rag-engine.png"; // Add a screenshot for this!
import Work4 from "../../assets/Moveasy.png";
import Work5 from "../../assets/sales-analyzer.svg"; // Add a screenshot for this!
import Work6 from "../../assets/banking-api.svg"; // Add a screenshot for this!
import Work7 from "../../assets/todo-list.png"; // Add a screenshot for this!
import Work8 from "../../assets/Logo.jpg"; // Swastha Sanchar
import Work9 from "../../assets/calculator.svg"; // Add a screenshot for this!

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Threat Identifier (BERT NLP)",
    category: "AI & ML",
    link: "https://github.com/abhyaung/Threat-Detecting-AI-Model",
    description:
      "Fine‑tuned BERT sequence classifier to detect threats, insults, and hate speech in online discourse. Achieved 89.5% accuracy and an 89.2% F1‑score, deployed with a containerized Streamlit frontend.",
  },
  {
    id: 2,
    image: Work3,
    title: "Local RAG Inference Engine",
    category: "AI & ML",
    link: "https://github.com/abhyaung/local-rag-inference-engine",
    description:
      "Engineered a completely local AI chat system utilizing Llama-3 and FastAPI. Implemented Retrieval-Augmented Generation (RAG) for secure, offline document querying and high-speed semantic search.",
  },
  {
    id: 3,
    image: Work2,
    title: "RideEase - Carpooling Platform",
    category: "Full-Stack",
    link: "https://github.com/abhyaung/RideEase",
    description:
      "Architected a full-stack MERN application connecting commuters. Integrated the Google Maps API for spatial route matching and Stripe API for secure, real-time payment processing.",
  },
  {
    id: 4,
    image: Work4,
    title: "MoveEasy",
    category: "Full-Stack",
    link: "https://github.com/abhyaung/MoveEasy",
    description:
      "Developed a flexible, pay-as-you-go moving and delivery platform. Features a dynamic pricing engine based on distance and weight, empowering small businesses with scalable delivery infrastructure.",
  },
  {
    id: 5,
    image: Work5,
    title: "Sales Data Analyzer",
    category: "Backend",
    link: "https://github.com/abhyaung/SalesDataAnalyzer",
    description:
      "Built a robust backend data analysis tool utilizing the Spring framework to process, evaluate, and extract critical business insights from large-scale sales datasets.",
  },
  {
    id: 6,
    image: Work6,
    title: "Core Banking API",
    category: "Backend",
    link: "https://github.com/abhyaung/banking-api",
    description:
      "Designed a secure RESTful API simulating core financial transactions, encompassing account management, encrypted user authentication, and transactional state management.",
  },
  {
    id: 7,
    image: Work8,
    title: "Swastha Sanchar",
    category: "Android",
    link: "https://github.com/abhyaung/Swastha-Sanchar",
    description:
      "Developed a holistic wellness Android application designed to foster community-based physical and mental wellness. Features native UI/UX design and goal-tracking systems.",
  },
  {
    id: 8,
    image: Work7,
    title: "React Task Manager",
    category: "Front-End",
    link: "https://github.com/abhyaung/To-Do-List",
    description:
      "Built a responsive, feature-rich task management UI using React and Tailwind CSS. Implemented advanced state management and local storage persistence for a seamless user experience.",
  },
  {
    id: 9,
    image: Work9,
    title: "React Calculator",
    category: "Front-End",
    link: "https://github.com/abhyaung/Calculator",
    description:
      "Developed a modern web-based calculator demonstrating component-based architecture, complex React state management, and algorithmic input parsing.",
  },
];

export default Menu;
