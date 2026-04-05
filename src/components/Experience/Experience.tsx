"use client";

import { useState } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import technologies from "@/data/technologies.json";
import {
  FaArrowRight,
  FaSpinner,
  FaCode,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";
import type { Technology, Category } from "@/types";
import styles from "./Experience.module.scss";

const Experience = () => {
  const [elements, setElements] = useState(10);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const typedTechs = technologies as Technology[];

  const filteredTechs =
    activeCategory === "all"
      ? typedTechs
      : typedTechs.filter((tech) => tech.category === activeCategory);

  const slicedTechs = filteredTechs.slice(0, elements);
  const hasMore = elements < filteredTechs.length;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const increment =
        typeof window !== "undefined" && window.innerWidth < 768 ? 6 : 10;
      setElements((prev) => prev + increment);
      setLoading(false);
    }, 800);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setElements(10);
  };

  const categories: Category[] = [
    {
      id: "all",
      name: "All Technologies",
      icon: <FaCode className={styles.iconCyan} />,
      count: typedTechs.length,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <FaCode className={styles.iconBlue} />,
      count: typedTechs.filter((t) => t.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      icon: <FaLayerGroup className={styles.iconGreen} />,
      count: typedTechs.filter((t) => t.category === "backend").length,
    },
    {
      id: "tools",
      name: "Tools",
      icon: <FaTools className={styles.iconPurple} />,
      count: typedTechs.filter((t) => t.category === "tools").length,
    },
  ];

  return (
    <div id="experience" className={styles.experience}>
      {/* Background */}
      <div className={styles.bgElements}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <Fade direction="down" duration={1500} triggerOnce>
          <div className={styles.header}>
            <h2 className={styles.title}>Tech Stack</h2>
            <p className={styles.subtitle}>
              Technologies I use to build amazing web experiences
            </p>
          </div>
        </Fade>

        {/* Category Filters */}
        <Fade duration={1200} delay={300} triggerOnce>
          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`${styles.filterBtn} ${
                  activeCategory === category.id ? styles.filterActive : ""
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span
                  className={`${styles.filterCount} ${
                    activeCategory === category.id
                      ? styles.filterCountActive
                      : ""
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </Fade>

        {/* Technologies Grid */}
        <div className={styles.grid}>
          {slicedTechs.map((tech, index) => (
            <Zoom
              key={tech.id}
              duration={800}
              delay={index * 50}
              style={{ cursor: "pointer" }}
              triggerOnce
            >
              <div className={styles.techCard}>
                <div className={styles.techGlow} />

                <div className={styles.techIconWrapper}>
                  <img
                    src={tech.src}
                    alt={tech.title}
                    className={styles.techIcon}
                  />
                </div>

                <h3 className={styles.techName}>{tech.title}</h3>

                <div className={styles.techBadge}>
                  <span
                    className={`${styles.categoryBadge} ${
                      tech.category === "frontend"
                        ? styles.catFrontend
                        : tech.category === "backend"
                          ? styles.catBackend
                          : styles.catTools
                    }`}
                  >
                    {tech.category}
                  </span>
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
                  <span>Loading more technologies...</span>
                </div>
              ) : (
                <button onClick={loadMore} className={styles.loadMoreBtn}>
                  <span>Load More</span>
                  <FaArrowRight className={styles.loadMoreArrow} />
                </button>
              )}
              <div className={styles.counter}>
                Showing {slicedTechs.length} of {filteredTechs.length}{" "}
                technologies
              </div>
            </div>
          </Fade>
        )}

        {/* All Loaded */}
        {!hasMore && slicedTechs.length > 0 && (
          <Fade direction="up" duration={800} triggerOnce>
            <div className={styles.allLoaded}>
              <div className={styles.allLoadedBadge}>
                <span>🎉</span>
                <span>All technologies loaded!</span>
              </div>
            </div>
          </Fade>
        )}

        {/* Stats */}
        <Fade direction="up" duration={1200} delay={400} triggerOnce>
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.statCyan}`}>
              <div className={styles.statNumber}>{typedTechs.length}</div>
              <div className={styles.statLabel}>Total Technologies</div>
            </div>
            <div className={`${styles.statCard} ${styles.statBlue}`}>
              <div className={styles.statNumber}>
                {categories.find((c) => c.id === "frontend")?.count}
              </div>
              <div className={styles.statLabel}>Frontend</div>
            </div>
            <div className={`${styles.statCard} ${styles.statGreen}`}>
              <div className={styles.statNumber}>
                {categories.find((c) => c.id === "backend")?.count}
              </div>
              <div className={styles.statLabel}>Backend</div>
            </div>
            <div className={`${styles.statCard} ${styles.statPurple}`}>
              <div className={styles.statNumber}>
                {categories.find((c) => c.id === "tools")?.count}
              </div>
              <div className={styles.statLabel}>Tools</div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
