import portfolio from "../assets/images/portfolio.png";
import invoice from "../assets/images/invoice.png";
import banking from "../assets/images/banking.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A modern React portfolio showcasing my skills, projects, and experience with smooth animations and responsive design.",

    tech: ["React", "CSS", "JavaScript"],

    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Invoice Management System",

    image: invoice,

    description:
      "A full CRUD invoice management application with client management, invoice generation, and payment tracking.",

    tech: ["React", "Node.js", "SQL"],

    github: "#",

    demo: "#",
  },

  {
    id: 3,
    title: "Bank Dashboard",

    image: banking,

    description:
      "A responsive banking dashboard displaying financial reports, transactions, and interactive charts.",

    tech: ["React", "Chart.js", "CSS"],

    github: "#",

    demo: "#",
  },
];

export default projects;
