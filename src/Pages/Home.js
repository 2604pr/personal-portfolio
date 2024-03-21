import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import Type from "./Type";


function Home() {
  const { img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className=" justify-center items-center md:flex lg:flex xl:flex 2xl:flex  ">
      
      <div className="ml-10 max-w-xs sm:ml-20 flex justify-left items-center 2xl:w-1/2  sm:w-1/7 md:w-1/4 md:mt-20 " >
        <img ref={myimageref} className="" src={img} alt="Pranshu Patel" />
      </div>


      <div className="ml-10 md:mt-20 mt-10 ">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-teal-600 md:text-2xl xl:text-4xl xl:leading-tight font-bold"
        >
          Hey👋<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl  font-bold "
        >
          I'm Pranshu Patel
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-pink-600 md:text-2xl xl:text-4xl  font-bold"
        >
          <Type />
        </h2>
        
      </div>

      

    </main>
  );
}

export default Home;
