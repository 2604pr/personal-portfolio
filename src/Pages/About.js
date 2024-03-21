import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 mt-20">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About
        </h1>
        <p className=" py-8 lg:max-w-3xl text-teal-500 font-medium">Hey👋, I am an Electronics and Communication Engineering student at BIET Jhansi(affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow), graduating in 2024 with an aggregate CGPA of 8.12 . I have solved over 800+ DSA(Data Structures and Algorithms) problems on Leetcode and GeeksforGeeks. I have also completed SQL,Problem Solving in Java,Core Java certifications on Hackerrank platform from basic to advance level. Alongwith this, I have worked on technologies like Java, JavaScript, HTML, CSS, React.js, Redux,Node.js  MongoDB, Express.js, Tailwind CSS, Bootstrap, SQL, MySQL during my bachelor's.
        <br></br>
        <br></br>
        I am passionate about developing complex applications that solve real-world problems impacting millions of users.
  
  I have completed 3 Internships in various domains like Frontend Developer Intern, Web Developer Intern, Teaching Assistant.I've mentored a batch of 30 students in Data Structures and Algorithms at UpSkill Valley. I have also worked as Web Developer Intern at Foss Freaks Pvt. Ltd. where I spiced up front-end design. Here,I collaborated within a team environment, contributing to project lifecycles from concept to deployment. Applied best practices in coding, debugging, and testing.
        
        
        
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
