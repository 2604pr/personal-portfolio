// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project7.jpg";
import projectImage8 from "./assets/projects/project8.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pranshu Patel",
  tagline: "I am a Web Developer",
  img: profile,
  about: ` 
  
   `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pranshu-patel-7b96b21bb/",
  github: "https://github.com/2604pr",
  twitter: "https://twitter.com/PranshuP2604?t=ZcBdHAEuddANDbg5w0tMMQ&s=09",
  instagram:
    "https://www.instagram.com/pranshu__patel/?igsh=MTltOHJzZHhpZ2VuMg%3D%3D",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer Intern",
    Company: `Foss Freaks Pvt. Ltd.`,
    Location: "Remote",
    Type: "Internship",
    Duration: "June 2023 - Aug 2023",
  },
  {
    Position: "Web Developer Intern",
    Company: `Upskill Valley`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Jan 2023 - March 2023",
  },
  {
    Position: "Teaching Assistant",
    Company: `NavGurukul Academy`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Jan 2022 - June 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology(B.Tech) in Electronics & Communication Engineering",
    Company: `Bundelkhand Institute of Engineering and Technology, Jhansi`,
    Location: "Jhansi, Uttar Pradesh, India",
    Duration: "November 2020 - May 2024",
  },

  {
    Position: "XII-(ISC)",
    Company: `City Children's Academy`,
    Location: "Chhibaramau,Dist.- Kannauj, Uttar Pradesh",
    Duration: "March 2018 - May 2019",
  },
  {
    Position: "X-(ICSE)",
    Company: `City Children's Academy`,
    Location: "Chhibaramau,Dist.- Kannauj, Uttar Pradesh",
    Duration: "March 2016 - May 2017",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Food&Feast",
    image: projectImage4,
    description: `Food&Feast fetches data from live Swiggy API from which we can select our favourite meals to be ordered from restaurant.It provides a fascinating UI for user and gives quick search results.`,
    techstack: "HTML, CSS, JavaScript , ReactJs, Redux-toolkit",
    previewLink: "https://65f3dfff14582f16746d1500--frolicking-treacle-1c62fb.netlify.app/",
    githubLink: "https://github.com/2604pr/food-feast",
  },
  {
    title: "Movieflix",
    image: projectImage1,
    description: `Movieflix shows a list of movies on various genres to its users using TMDB API.It also uses Alan-AI and Material UI for making search more efficient using voice searching feature.`,
    techstack: "HTML, CSS, JavaScript , ReactJs, Redux, Material UI, Alan-AI",
    previewLink: "https://movieflixe.netlify.app/",
    githubLink: "https://github.com/2604pr/movieflix",
  },
  {
    title: "The Brainy-Bowl",
    image: projectImage2,
    description: `The BrainyBowl allows user to select the criteria for their quiz from a list of options. The user's performance in the quiz will be tracked and shown in the scoreboard.`,
    techstack: "HTML, CSS, JavaScript, ReactJs, Bootstrap, Chakra-UI",
    previewLink: "https://65f5d3745ee8bcd926de8af7--unrivaled-cranachan-d6ecc1.netlify.app/",
    githubLink: "https://github.com/2604pr/The-BrainyBowl",
  },
  {
    title: "Netflix",
    image: projectImage3,
    description: `This project gives a fascinating UI experience to access all the content that is available on Netflix.We can switch to various genre to watch our favourite content.`,
    techstack: "HTML, CSS, JavaScript, ReactJs",
    previewLink: "https://free-netflix.vercel.app/",
    githubLink: "https://github.com/2604pr/netflix_",
  },
  {
    title: "Amazon Clone",
    image: projectImage6,
    description: `This involves all major functionalities such as adding products to cart, wishlist, browsing different product categories, managing shipping details, and payment options.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb",
    githubLink: "https://github.com/2604pr/Amazon",
  },
  {
    title: "Sorting Visualizer",
    image: projectImage7,
    description: `This project Play with Algorithms involves a very clean,fascinating UI and it allows the users to select any of sorting algorithms, select the array size, and speed ofthe visualization.`,
    techstack: " HTML, CSS, JavaScript",
    previewLink: "https://golden-praline-07d1f8.netlify.app/",
    githubLink: "https://github.com/2604pr/Sorting-Visualizer",
  },
  {
    title: "Guess It",
    image: projectImage8,
    description: `It is a window based pictorial movie and fun quiz application which lays emphasis on various ques ans and score of user at the end of quiz.Swing and AWT are used to build a fascinating UI.`,
    techstack: "Java, Swing, AWT",
    githubLink: "https://github.com/2604pr/Guess-It",
  },
  
  {
    title: "redstore",
    image: projectImage5,
    description: `It is a modern e-commerce website that provides best items mainly for athletes.It provides a magnificent UI design from which we can choose our own products.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://redstore-pranshu.netlify.app/",
    githubLink: "https://github.com/2604pr/redstore",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "pranshupatel833@gmail.com",
  phone: "+91 6394835675",
};
