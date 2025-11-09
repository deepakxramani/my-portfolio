import React, { useState } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Zoom, Fade } from "react-awesome-reveal";
import technologies from "../components/technologies.json";
import { FaArrowRight, FaSpinner, FaCode, FaLayerGroup, FaTools } from "react-icons/fa";
import "./loader.css";

export const Experience = () => {
  const [elements, setElements] = useState(10);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    ScrollReveal().reveal(".tech-item", {
      origin: "bottom",
      distance: "50px",
      duration: 1500,
      delay: 100,
      reset: true,
    });
    
    ScrollReveal().reveal(".section-header", {
      origin: "top",
      distance: "80px",
      duration: 1800,
      delay: 200,
      reset: true,
    });
  }, []);

  // Simple filtering based on category
  const filteredTechs = activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const slicedTechs = filteredTechs.slice(0, elements);
  const hasMore = elements < filteredTechs.length;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const increment = window.innerWidth < 768 ? 6 : 10;
      setElements(prev => prev + increment);
      setLoading(false);
    }, 800);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setElements(10);
  };

  // Category configuration
  const categories = [
    { 
      id: "all", 
      name: "All Technologies", 
      icon: <FaCode className="text-cyan-400" />,
      count: technologies.length
    },
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: <FaCode className="text-blue-400" />,
      count: technologies.filter(t => t.category === 'frontend').length
    },
    { 
      id: "backend", 
      name: "Backend", 
      icon: <FaLayerGroup className="text-green-400" />,
      count: technologies.filter(t => t.category === 'backend').length
    },
    { 
      id: "tools", 
      name: "Tools", 
      icon: <FaTools className="text-purple-400" />,
      count: technologies.filter(t => t.category === 'tools').length
    }
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full pt-24">
        {/* Header */}
        <Fade direction="down" duration={1500} triggerOnce>
          <div className="text-center mb-12 section-header">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies I use to build amazing web experiences
            </p>
          </div>
        </Fade>

        {/* Category Filters */}
        <Fade direction="up" duration={1200} delay={300} triggerOnce>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 transform -translate-y-1'
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-700 text-gray-300'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </Fade>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {slicedTechs.map((tech, index) => (
            <Zoom
              key={tech.id}
              duration={800}
              delay={index * 50}
              triggerOnce
              className="tech-item"
            >
              <div className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col items-center justify-center h-40">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Technology Icon */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 mb-4">
                  <img
                    src={tech.src}
                    alt={tech.title}
                    className="w-16 h-16 object-contain filter group-hover:drop-shadow-2xl"
                  />
                </div>

                {/* Technology Name */}
                <h3 className="relative z-10 text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.title}
                </h3>

                {/* Category Badge */}
                <div className="relative z-10 mt-2">
                  <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                    tech.category === 'frontend' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    tech.category === 'backend' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {tech.category}
                  </span>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="flex flex-col items-center gap-6">
              {loading ? (
                <div className="flex items-center gap-3 text-cyan-400">
                  <FaSpinner className="animate-spin" size={20} />
                  <span>Loading more technologies...</span>
                </div>
              ) : (
                <button
                  onClick={loadMore}
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                >
                  <span>Load More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              
              <div className="text-gray-400 text-sm">
                Showing {slicedTechs.length} of {filteredTechs.length} technologies
              </div>
            </div>
          </Fade>
        )}

        {/* All Loaded Message */}
        {!hasMore && slicedTechs.length > 0 && (
          <Fade direction="up" duration={800}>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                <span>🎉</span>
                <span>All technologies loaded!</span>
              </div>
            </div>
          </Fade>
        )}

        {/* Stats */}
        <Fade direction="up" duration={1200} delay={400} triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400">{technologies.length}</div>
              <div className="text-gray-300 mt-2">Total Technologies</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">
                {categories.find(c => c.id === 'frontend')?.count}
              </div>
              <div className="text-gray-300 mt-2">Frontend</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400">
                {categories.find(c => c.id === 'backend')?.count}
              </div>
              <div className="text-gray-300 mt-2">Backend</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">
                {categories.find(c => c.id === 'tools')?.count}
              </div>
              <div className="text-gray-300 mt-2">Tools</div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};