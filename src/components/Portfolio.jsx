import React, { useState } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import portfolios from "../components/portfolios.json";
import { Dialog } from "primereact/dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode, FaArrowRight, FaSpinner } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";

const Portfolio = () => {
  const [elements, setElements] = useState(3);
  const [visible, setVisible] = useState(false);
  const [demoLink, setDemoLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setElements((prev) => prev + 3);
      setLoading(false);
    }, 800);
  };

  const slice = portfolios.slice(0, elements);
  const hasMore = elements < portfolios.length;

  const handleDialogue = (project) => {
    return (
      <Dialog
        draggable={false}
        modal={true}
        header={
          <div className="flex items-center gap-2">
            <FaPlay className="text-cyan-400" />
            <span className="text-white font-bold">Project Demo: {project?.title}</span>
          </div>
        }
        headerStyle={{ 
          fontWeight: 600, 
          fontFamily: "inherit",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          borderBottom: "1px solid #334155"
        }}
        visible={visible}
        style={{
          fontFamily: "inherit",
          width: "60vw",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          border: "1px solid #334155",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        contentStyle={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px"
        }}
        onHide={() => {
          setVisible(false);
          setSelectedProject(null);
        }}
        breakpoints={{ "960px": "90vw", "641px": "95vw" }}
      >
        <div className="flex flex-col items-center justify-center gap-6 p-4">
          {videoLink ? (
            <div className="relative w-full">
              <iframe
                className="demoVideo rounded-xl shadow-2xl"
                style={{
                  width: "100%",
                  height: matchesSM ? "400px" : "250px",
                  border: "2px solid #334155"
                }}
                src={videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <SiYoutube />
                YouTube
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <img
                alt="not-found"
                src="assets/notfoundimg.gif"
                className="rounded-xl shadow-2xl"
                style={{ width: matchesSM ? "70%" : "90%", maxWidth: "400px" }}
              />
              <p className="text-gray-400 text-center">No demo video available</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
              Live Demo
            </a>
            {selectedProject?.codelink && (
              <a
                href={selectedProject.codelink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-xl hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="group-hover:scale-110 transition-transform" />
                View Code
              </a>
            )}
          </div>
        </div>
      </Dialog>
    );
  };

  const handleDialogueState = (project) => {
    setSelectedProject(project);
    setVisible(true);
    setDemoLink(project.demolink);
    setVideoLink(project.videolink);
  };

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full pt-24">
        {/* Header Section */}
        <Fade direction="down" duration={1500} triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in modern web development
            </p>
          </div>
        </Fade>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {slice.map((project, index) => (
            <Zoom
              key={project.id}
              duration={800}
              delay={index * 100}
              triggerOnce
              className="h-full"
            >
              <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.src}
                    alt={`Project ${project.title}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => handleDialogueState(project)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
                    >
                      <FaPlay size={16} />
                    </button>
                    {project.codelink && (
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
                      >
                        <FaCode size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description || "A modern web application built with cutting-edge technologies."}
                  </p>
                  
                  {/* Tech Stack */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => handleDialogueState(project)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
                    >
                      <FaPlay size={12} />
                      <span>Demo</span>
                    </button>
                    {project.codelink && (
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-white py-2 px-4 rounded-lg hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <FaGithub size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Load More Section */}
        {hasMore && (
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="flex flex-col items-center gap-6">
              {loading ? (
                <div className="flex items-center gap-3 text-cyan-400">
                  <FaSpinner className="animate-spin" size={20} />
                  <span>Loading more projects...</span>
                </div>
              ) : (
                <button
                  onClick={loadMore}
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                >
                  <span>Load More Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              
              {/* Progress Indicator */}
              <div className="text-gray-400 text-sm">
                Showing {Math.min(elements, portfolios.length)} of {portfolios.length} projects
              </div>
            </div>
          </Fade>
        )}

        {/* All Projects Loaded Message */}
        {!hasMore && portfolios.length > 0 && (
          <Fade direction="up" duration={800}>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                <span>✨</span>
                <span>All projects loaded! Thanks for exploring my work.</span>
              </div>
            </div>
          </Fade>
        )}
      </div>

      {/* Dialog */}
      {visible && selectedProject && handleDialogue(selectedProject)}
    </div>
  );
};

export default Portfolio;