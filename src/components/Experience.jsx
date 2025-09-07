import React, { useState } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Zoom } from "react-awesome-reveal";
import technologies from "../components/technologies.json";
import "./loader.css";
export const Experience = () => {
  const [elements, setElements] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".item", {
      origin: "top",
      distance: 80 + 100,
      duration: 2000,
      delay: 100,
      reset: true,
    });
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
      const increment = isMobile ? 6 : 3;
      setElements((prev) => prev + increment);
      setLoading(false);
    }, 300);
  };
  const slicedTechs = technologies.slice(0, elements);
// console.log("slicedTechs", slicedTechs)
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-20"
    >
      <div
        className="max-w-screen-lg mx-auto  p-4 flex flex-col
    justify-center w-full h-full text-white"
      >
        <Zoom duration={0 + 1000} delay={0 + 100} fraction={0} cascade={true}>
          <div>
            <p
              className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline"
            >
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
        </Zoom>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          {" "}
          {slicedTechs.map(({ id, src, title, style }) => (
            <Zoom duration={0 + 1000} delay={0 + 100} cascade={true}>
              <div
                key={id}
                className={`shadow-md hover:scale-110 duration-300 ease-in-out
                    py-2 rounded-lg flex flex-col justify-between h-full ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </Zoom>
          ))}
        </div>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <div className="spinner bg-gradient-to-b from-cyan-500 to-blue"></div>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button
            className="text-white w-28 h-10 rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer mt-16"
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
