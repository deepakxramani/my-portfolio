import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; 
import { Zoom } from "react-awesome-reveal";
import technologies from "../components/technologies.json"


export const Experience = () => {

  useEffect(()=>{
    ScrollReveal().reveal('.item', {origin: 'top',distance: 80+100,duration: 2000, delay:100,reset: true });
},[]) 

  // const techs = [
  //   {
  //     id: 1,
  //     src: `${html}`,
  //     title: 'HTML',
  //     style: 'shadow-orange-500',
  //   },
  //   {
  //     id: 2,
  //     src: `${CSS}`,
  //     title: 'CSS',
  //     style: 'shadow-blue-500',
  //   },
  //   {
  //     id: 3,
  //     src: `${javascript}`,
  //     title: 'JavaScript',
  //     style: 'shadow-yellow-500',
  //   },
  //   {
  //     id: 4,
  //     src: `${reactImage}`,
  //     title: 'React',
  //     style: 'shadow-blue-500',
  //   },
  //   {
  //     id: 5,
  //     src: `${tailwind}`,
  //     title: 'Tailwind',
  //     style: 'shadow-sky-500',
  //   },
  //   {
  //     id: 6,
  //     src: `${nextjs}`,
  //     title: 'Next JS',
  //     style: 'shadow-gray-500',
  //   },
  //   {
  //     id: 7,
  //     src: `${graphql}`,
  //     title: 'GraphQL',
  //     style: 'shadow-pink-500',
  //   },
  //   {
  //     id: 8,
  //     src: `${github}`,
  //     title: 'GitHub',
  //     style: 'shadow-gray-500',
  //   },
  // ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-20"
    >
      <div
        className="max-w-screen-lg mx-auto  p-4 flex flex-col
    justify-center w-full h-full text-white"
      >
        <Zoom duration={0+1000} delay={0+100} fraction={0} cascade={true}>
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
          {technologies.map(({ id, src, title, style }) => (
            <Zoom duration={0+1000} delay={0+100} cascade={true}>
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-300 ease-in-out
                    py-2 rounded-lg  ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};
