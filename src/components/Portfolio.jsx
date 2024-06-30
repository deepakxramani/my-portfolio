import React from 'react'
import arrayDestruct from "../assets/arrayDestruct.jpg"
import installNode from "../assets/installNode.jpg"
import navbar from "../assets/navbar.jpg"
import reactParallax from "../assets/reactParallax.jpg"
import reactSmooth from "../assets/reactSmooth.jpg"
import reactWeather from "../assets/reactWeather.jpg"
import calculateMe from "../assets/calculateMe.jpg"
const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      name: "Calculator App",
      src: calculateMe,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
    {
      id: 2,
      name: "Calculator App",
      src: reactParallax,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
    {
      id: 3,
      name: "Calculator App",
      src: navbar,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
    {
      id: 4,
      name: "Calculator App",
      src: reactSmooth,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
    {
      id: 5,
      name: "Calculator App",
      src: installNode,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
    {
      id: 6,
      name: "Calculator App",
      src: reactWeather,
      demolink: "https://calculateme-deepakxramani.netlify.app/",
      codelink: "https://github.com/deepakxramani/vanilla-js-projects/tree/main/01%20Calculator",
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.reverse().map(({ id, src,demolink,codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden object-fit">
              <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 ease-in hover:scale-110 w-full h-48 object-cover" />
              <div className="flex items-center justify-center p-4">
                <button className="w-1/2 px-6 py-3 m-4 bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer text-white rounded-md duration-200 hover:scale-105">
                  <a href={demolink} target='blank'>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 bg-gray-800 border-solid border-2 border-sky-500 text-white rounded-md duration-200 hover:scale-105">
                  <a href={codelink} target='blank'>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;