import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project6 from "../assets/project7.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiLeafFill,
  RiJavaLine,
  RiDatabase2Line,
  RiGithubFill,
  RiSecurePaymentFill,
} from "@remixicon/react";
import {
  RiCodeSSlashLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "SunnY Pawar",
  role: "Full Stack Developer",
  subheading:
    "Computer science graduate with an internship experience of 10 month's in full-stack development, I build efficient, scalable web applications. And currently seeking a full-time role to launch my career in This Awesome Field .",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Role Based Access Control",
    description: "A full fledged java Spring boot project with backend implements Role-Based-Authentication combined with OAuth2 for secure management and access control It leverages Spring Security, Spring Data JPA, for authentication, authorization and user management. Also integrated with OAuth2 for easy third party login Google(or any OAuth2 provider) .",

    techStack: ["Thymeleaf", "Spring Boot", "Spring Security", "OAuth2", "JWT", "Postgresql"],
    imgSrc: project1,
    link: "https://github.com/theXunnY/RBAC-using-SpringBoot-and-OAuth2",
  },
   {
    id: 2,
    title: "Json Generator",
    description:" A web app to design and generate custom JSON objects. Users can define nested schemas, generate mock data, and expose live API endpoints for integration(comming soon).",
    techStack: ["React", "JavaScript", "Tailwind CSS", "vite"],
    imgSrc: project7,
    link: "https://json-generator-six.vercel.app/",
  },
  {
    id: 3,
    title: "Spring boot crud API for Product and Categories (CRUD API)",
    description:" A Spring boot application for managing CRUD operations on Products and Categories with server side pagination, This API allows users to manage categories and products, where each product is associated with a specific category with the help of one to many mapping",
    techStack: ["Spring Boot", "Spring Data JPA", "PostgreSql", "Postman"],
    imgSrc: project2,
    link: "https://github.com/theXunnY/NiMap-Machine-Test",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
    "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React.js", "Tailwind CSS", "gsap"],
    imgSrc: project3,
    link: "/",
  },
  {
    id: 5,
    title: "JOB Portal (In Progress)",
    description:"(In Progress) A ai based job portal where just by uploading our resume we get matching jobs ",
    techStack: ["Spring Boot", "React.js", "openAi API", "Apache Tiks", "Posgtrsql"],
    imgSrc: project6,
    link: "/",
  },
  {
    id: 6,
    title: "Task Management App (Backend Focus) ",
    description:"We can perform all CRUD operations on employee and task and we can also assign a particular task to a employee and we can delete that task or remove that employee, Using Hibernate Many-To-Many Bidirectional Mapping",
    techStack: ["Java", "Servlet", "JSP", "Hibernate", "Postgres"],
    imgSrc: project5,
    link: "https://github.com/theXunnY/TaskManagementUsingJavaServlet",
  },
  {
    id: 7,
    title: "Task Management App (Console Based)",
    description:"A console based Java application to understand the core concepts of java,oop's, Collection framework, JDBC, Hibernate and relational mapping",
    techStack: ["Java","OOP's", "Collection Framework", "JDBC", "Hibernate", "SQL","Postgres"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Java",
    icon: <RiJavaLine className="text-orange-300" />,
  },
  {
    name: "Spring Boot",
    icon: <RiLeafFill className="text-green-500" />,
  },
  {
    name: "Spring Security",
    icon: <RiSecurePaymentFill className="text-green-400" />,
  },
  {
    name: "SQL",
    icon: <RiDatabase2Line className="text-pink-400" />,
  },
  {
    name: "GitHub",
    icon: <RiGithubFill className="text-gray-100" />,
  },

];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Full Stack Java developer Intern",
    company: " Qspiders.",
    description:"Completed an intensive internship focused on full stack Java development, gaining hands-on experience with front-end technologies (HTML, CSS, JavaScript, Bootstrap, Tailwind, etc) and back-end technologies (Java, Spring boot, Spring MVC, SQL, etc.)",
    techStack: ["HTML","CSS","Javascript", "React.js","Tailwind", "Java", "Spring Boot","Spring Security", "SQL",],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science - 7.7 CGPA",
    institution: "Sant Gadge Baba Amaravati University",
    duration: "2021 - 2023",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development.",
  },
  {
    id: 2,
    degree: "Diploma in Electrical Engineering - 60%",
    institution: "MSBTE",
    duration: "2015 - 2020",
    description:
      "Completed my diploma in electrical engineering Focused on electrical engineering core concepts.",
  },
  {
    id: 3,
    degree: "SSC - 74.20%",
    institution: "Amaravati University",
    duration: "2015",
    description:
      "Completed my ssc from amaravati university.",
  },
];

