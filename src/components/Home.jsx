import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TypedText from "./TypedText";
import "./waving-emoji.css";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { FaCloudDownloadAlt, FaStar, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import ScrollReveal from "scrollreveal";
import SocialLinks from "./SocialLinks";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hi-text", {
      origin: "top",
      distance: "60px",
      duration: 1500,
      reset: true,
    });
    ScrollReveal().reveal(".feature-name", {
      origin: "top",
      distance: "80px",
      duration: 1600,
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".feature-role", {
      origin: "top",
      distance: "100px",
      duration: 1700,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".feature-info", {
      origin: "top",
      distance: "120px",
      duration: 1800,
      delay: 300,
      reset: true,
    });
    ScrollReveal().reveal(".tech-stack", {
      origin: "bottom",
      distance: "80px",
      duration: 1600,
      delay: 400,
      reset: true,
    });
    ScrollReveal().reveal(".feature-btn", {
      origin: "bottom",
      distance: "60px",
      duration: 1500,
      delay: 500,
      reset: true,
    });
    ScrollReveal().reveal(".hero-image", {
      origin: "right",
      distance: "100px",
      duration: 2000,
      delay: 300,
      reset: true,
    });
  }, []);

  const techIcons = [
    { icon: <SiReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white-400" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind" },
  ];

  return (
    <div
      name="home"
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950
"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Social Links - Fixed on Left Side (Hidden on Mobile) */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden lg:flex z-50 bg-red-500 p-4">
        <div className="text-white font-bold mr-4">TEST VISIBLE</div>
        <SocialLinks />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen pt-24 pb-8 px-4 md:flex-row relative z-10 gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start h-full text-center md:text-left mb-12 md:mb-0 md:flex-1">
          {/* Welcome Badge */}
          <div className="hi-text mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <FaStar className="text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="feature-name text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Deepak Ramani
            </span>
          </h1>

          {/* Role with Typed Text */}
          <div className="feature-role mb-6">
            <h2 className="text-2xl sm:text-4xl text-gray-300 flex flex-col sm:flex-row items-center gap-2">
              <span>Creative</span>
              <span className="flex items-center">
                <span className="text-cyan-400 font-bold ml-2 min-h-[48px] flex items-center">
                  <TypedText />
                </span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="feature-info text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            With <span className="text-cyan-400 font-semibold">1+ year</span> of
            experience, I specialize in building modern web applications using
            cutting-edge technologies. Passionate about creating seamless user
            experiences and scalable solutions.
          </p>

          {/* Tech Stack Icons */}
          <div className="tech-stack mb-8">
            <div className="flex items-center gap-6">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="text-3xl p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 group-hover:border-cyan-500/50 group-hover:transform group-hover:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="feature-btn flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group relative cursor-pointer overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Explore My Work
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>

            <a
              href="https://drive.google.com/file/d/1s6YFWkwRXwNI0lbU-HiO2xUVEiwwk3bN/view?usp=sharing"
              download={true}
              target="_blank"
              rel="noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Download CV
                <FaCloudDownloadAlt
                  size={18}
                  className="ml-2 group-hover:scale-110 transition-transform"
                />
              </span>
            </a>
          </div>

          {/* Experience Badge */}
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image cursor-pointer md:flex-1 flex justify-center items-center w-full">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="24px"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={2000}
            className="relative w-full max-w-md"
          >
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-1000 opacity-70 group-hover:opacity-100"></div>

              {/* Image Container */}
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 group-hover:border-cyan-500/30 transition-all duration-500">
                <img
                  src="/HeroImage2.jpg"
                  alt="Deepak Ramani"
                  className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce">
                <FaRocket className="text-white text-sm" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
