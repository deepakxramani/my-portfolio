"use client";

import React, { useState } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import portfolios from "@/data/portfolios.json";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaCode,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import Modal from "@/components/Modal/Modal";
import type { Portfolio as PortfolioType } from "@/types";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const [elements, setElements] = useState(3);
  const [visible, setVisible] = useState(false);
  const [demoLink, setDemoLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioType | null>(
    null
  );

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setElements((prev) => prev + 3);
      setLoading(false);
    }, 800);
  };

  const typedPortfolios = portfolios as PortfolioType[];
  const slice = typedPortfolios.slice(0, elements);
  const hasMore = elements < typedPortfolios.length;

  const handleDialogueState = (project: PortfolioType) => {
    setSelectedProject(project);
    setVisible(true);
    setDemoLink(project.demolink);
    setVideoLink(project.videolink);
  };

  return (
    <div id="portfolio" className={styles.portfolio}>
      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.blobTopLeft} />
        <div className={styles.blobBottomRight} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <Fade direction="down" duration={1500} triggerOnce>
          <div className={styles.header}>
            <h2 className={styles.title}>My Projects</h2>
            <p className={styles.subtitle}>
              A collection of my recent work showcasing my skills in modern web
              development
            </p>
          </div>
        </Fade>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {slice.map((project, index) => (
            <Zoom
              key={project.id}
              duration={800}
              delay={index * 100}
              triggerOnce
              className={styles.gridItem}
            >
              <div className={styles.card}>
                {/* Project Image */}
                <div className={styles.imageWrapper}>
                  <img
                    src={project.src}
                    alt={`Project ${project.title}`}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />

                  {/* Hover Overlay */}
                  <div className={styles.hoverOverlay}>
                    <button
                      onClick={() => handleDialogueState(project)}
                      className={styles.playBtn}
                    >
                      <FaPlay size={16} />
                    </button>
                    {project.codelink && (
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.codeBtn}
                      >
                        <FaCode size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className={styles.info}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>
                    {project.description ||
                      "A modern web application built with cutting-edge technologies."}
                  </p>

                  {/* Tech Stack */}
                  {project.technologies && (
                    <div className={styles.techTags}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={styles.techMore}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className={styles.actions}>
                    <button
                      onClick={() => handleDialogueState(project)}
                      className={styles.demoBtn}
                    >
                      <FaPlay size={12} />
                      <span>Demo</span>
                    </button>
                    {project.codelink && (
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.githubBtn}
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

        {/* Load More */}
        {hasMore && (
          <Fade direction="up" duration={1000} triggerOnce>
            <div className={styles.loadMore}>
              {loading ? (
                <div className={styles.loadingState}>
                  <FaSpinner className={styles.spinner} size={20} />
                  <span>Loading more projects...</span>
                </div>
              ) : (
                <button onClick={loadMore} className={styles.loadMoreBtn}>
                  <span>Load More Projects</span>
                  <FaArrowRight className={styles.loadMoreArrow} />
                </button>
              )}
              <div className={styles.counter}>
                Showing {Math.min(elements, typedPortfolios.length)} of{" "}
                {typedPortfolios.length} projects
              </div>
            </div>
          </Fade>
        )}

        {/* All Projects Loaded */}
        {!hasMore && typedPortfolios.length > 0 && (
          <Fade direction="up" duration={800}>
            <div className={styles.allLoaded}>
              <div className={styles.allLoadedBadge}>
                <span>✨</span>
                <span>All projects loaded! Thanks for exploring my work.</span>
              </div>
            </div>
          </Fade>
        )}
      </div>

      {/* Modal */}
      <Modal
        visible={visible}
        onHide={() => {
          setVisible(false);
          setSelectedProject(null);
        }}
        header={
          <div className={styles.modalHeader}>
            <FaPlay className={styles.modalHeaderIcon} />
            <span>Project Demo: {selectedProject?.title}</span>
          </div>
        }
      >
        <div className={styles.modalContent}>
          {videoLink ? (
            <div className={styles.videoWrapper}>
              <iframe
                className={styles.video}
                style={{ height: isMobile ? "250px" : "400px" }}
                src={videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className={styles.ytBadge}>
                <SiYoutube />
                YouTube
              </div>
            </div>
          ) : (
            <div className={styles.noVideo}>
              <img
                alt="not-found"
                src="/assets/notfoundimg.gif"
                className={styles.notFoundImg}
              />
              <p className={styles.noVideoText}>No demo video available</p>
            </div>
          )}

          <div className={styles.modalActions}>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className={styles.modalDemoBtn}
            >
              <FaExternalLinkAlt className={styles.modalBtnIcon} />
              Live Demo
            </a>
            {selectedProject?.codelink && (
              <a
                href={selectedProject.codelink}
                target="_blank"
                rel="noreferrer"
                className={styles.modalCodeBtn}
              >
                <FaGithub className={styles.modalBtnIcon} />
                View Code
              </a>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
