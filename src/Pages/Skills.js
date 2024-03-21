import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Skills
        </h1>


        <div className="inline-block mt-5">
          <h3 className="text-amber-300 font-semibold text-xl mt-1 ">
            Languages : 
            <span className="text-blue-200 font-medium text-base">  Java, JavaScript, C/C++, Python</span>
          </h3>

          <h3 className="text-amber-300 font-semibold text-xl mt-1">
          Frameworks : 
            <span className="text-blue-200 font-medium text-base"> ReactJs, Node.js, ExpressJs, Material-UI</span>
          </h3>

          <h3 className="text-amber-300 font-semibold text-xl mt-1">
          Tech Stack : 
            <span className="text-blue-200 font-medium text-base"> HTML, CSS, TypeScript, SQL, Redux, REST-API</span>
          </h3>

          <h3 className="text-amber-300 font-semibold text-xl mt-1">
          Databases : 
            <span className="text-blue-200 font-medium text-base"> MySQL, MongoDB</span>
          </h3>

          <h3 className="text-amber-300 font-semibold text-xl mt-1">
          Familiar with : 
            <span className="text-blue-200 font-medium text-base"> NextJs, Jest, jQuery, JSON, AWS, TailwindCSS/SCSS, Chakra-UI, Semantic UI</span>
          </h3>


          <h3 className="text-amber-300 font-semibold text-xl mt-1">
          Developer Tools : 
            <span className="text-blue-200 font-medium text-base"> Git, GitHub, VS Code, IntelliJ, Eclipse</span>
          </h3>

          <h3 className="text-amber-300 font-semibold text-xl mt-1 ">
          Courses : 
            <span className="text-blue-200 font-medium text-base"> Data Structures and Algorithms(DSA), Core Java, Object Oriented Programming System(OOPS), Database Management System(DBMS), Operating Systems(OS), Computer Networks(CN)</span>
          </h3>

        </div>



        <p className="text-amber-300  text-2xl mt-5 ">
          Tools & Technologies : 
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 ">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
