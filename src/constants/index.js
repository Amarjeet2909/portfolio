import { l } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import frontend from "../assets/frontend.png";
import cplusplus from "../assets/tech/cplusplus.png";
import c from "../assets/tech/c.png";
import sql from "../assets/tech/sql.png";
import java from "../assets/tech/java.png";
import gfg from "../assets/company/gfg.png";
import chegg from "../assets/company/chegg.jpg";
import tnp from "../assets/company/tnp.png";
import codingclub from "../assets/company/codingclub.jpg";
import Shopvista from "../assets/Shopvista.png";
import portfolio from "../assets/portfolio.png";
import web from "../assets/web.png";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/Projects",
    title: "Projects",
  },
  {
    id: "/Experience",
    title: "Experience",
  },
  {
    id: "/Achievement",
    title: "Achievement",
  },
  {
    id: "/Gallery",
    title: "Gallery",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Technical Writing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "TCW Intern",
    company_name: "GeeksForGeeks",
    icon: gfg,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "written technical articles on various aspects of computer science.",
      "15+ Articles published till date related to DSA, C++, Linux, Git, Shell & Web Development domain.",
      "Published articles are available at geeksforgeeks.org/user/jeetamar__singh/articles",
    ],
  },
  {
    title: "T&P Co-Ordinator",
    company_name: "Placement Cell CITK",
    icon: tnp,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Serving as a T&P Co-ordinator for the Placement cell of my College.",
      "Co-ordinating and managing the placement opportunities for the CSE Students.",
      "Acting as a bridge between organization and college.",
    ],
  },
  {
    title: "Subject Matter Expert",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Solved the doubt of students related to Computer science and engineering domains especially related to DSA and Coding.",
    ],
  },
  {
    title: "Secretary & Coding Tutor",
    company_name: "Coding Club CITK",
    icon: codingclub,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2023",
    points: [
      "I have served as a Secretary of the Coding Club CITK which is the coding society of CIT Kokrajhar.",
      "Taught C/C++ Programming and organized 10+ Events/Workshops related to Coding.",
      "Responsible for managing the entire team of the club.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ShopVista",
    description:
      "It's an Full Stack Web application based on MERN Stack Development. It's an E cart type application which is used to purchase various items available, It supports Login, Authentication, Password reset, Payment option, save cart, admin panel for sellers, search and other various functionalities.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Shopvista,
    source_code_link: "https://github.com/Amarjeet2909/E-Cart-MERN-Project",
  },
  {
    name: "T&P Portal",
    description:
      "Official Website of Placement Cell CITK. It is an React based application using different routes, concept of useState, fragment, switch, props. It's an fully responsive website currently in use of CIT Kokrajhar for it's T&P cell activities",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Amarjeet2909/Placement-Cell-Portal",
  },
  {
    name: "Diabetes Predictor",
    description:
      "An application of Machine learning based diabetes prediction, In this project patient dataset has been taken and the various ML models is prepared for predicting diabetes and based on that prediction the appropriate Health Insurance Policy will be suggested.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Amarjeet2909/Application-of-ML-based-Diabetes-Prediction-model",
  },
  {
    name: "Singh Portfolio",
    description:
      "An Amazing 3D portfolio website developed using ThreeJS and ReactJS, used powerful graphics library for rendering and animation. It contains all the neccessary information to reflect a good portfolio of a developer.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Amarjeet2909",
  },
];

export { services, technologies, experiences, testimonials, projects };
