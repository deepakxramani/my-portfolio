'use client';

import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import TypedText from '@/components/TypedText/TypedText';
import { FaCloudDownloadAlt, FaStar, FaRocket } from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from 'react-icons/si';
import { Fade, Zoom } from 'react-awesome-reveal';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Tilt from 'react-parallax-tilt';
import type { TechIcon } from '@/types';
import styles from './Home.module.scss';

const Home = () => {
  const techIcons: TechIcon[] = [
    { icon: <SiReact className={styles.iconCyan} />, name: 'React.js' },
    { icon: <SiNextdotjs className={styles.iconWhite} />, name: 'Next.js' },
    { icon: <SiNodedotjs className={styles.iconGreen} />, name: 'Node.js' },
    { icon: <SiNestjs className={styles.iconRed} />, name: 'Nest.js' },
    { icon: <SiMongodb className={styles.iconGreenDark} />, name: 'MongoDB' },
    // { icon: <SiTailwindcss className={styles.iconBlue} />, name: 'Tailwind' },
  ];

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='home' className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
        <div className={styles.blobCenter} />
      </div>

      {/* Desktop Social Links */}
      <div className={styles.desktopSocial}>
        <SocialLinks />
      </div>

      <div className={styles.content}>
        {/* Text Content */}
        <div className={styles.textContent}>
          {/* Welcome Badge */}
          <Fade direction='down' duration={1500} triggerOnce>
            <div className={styles.welcomeBadge}>
              <div className={styles.badge}>
                <FaStar className={styles.badgeIcon} />
                <span className={styles.badgeText}>
                  Welcome to my portfolio
                </span>
              </div>
            </div>
          </Fade>

          {/* Main Heading */}
          <Fade direction='down' duration={1600} delay={100} triggerOnce>
            <h1 className={styles.heading}>
              <span className={styles.gradientName}>Deepak Ramani</span>
            </h1>
          </Fade>

          {/* Role with Typed Text */}
          <Fade direction='down' duration={1700} delay={200} triggerOnce>
            <div className={styles.role}>
              <h2 className={styles.roleText}>
                <span>Creative</span>
                <span className={styles.roleTyped}>
                  <span className={styles.typedHighlight}>
                    <TypedText />
                  </span>
                </span>
              </h2>
            </div>
          </Fade>

          {/* Description */}
          <Fade direction='up' duration={1800} delay={300} triggerOnce>
            <p className={styles.description}>
              With <span className={styles.highlight}>1+ year</span> of
              experience, I specialize in building modern web applications using
              cutting-edge technologies. Passionate about creating seamless user
              experiences and scalable solutions.
            </p>
          </Fade>

          {/* Tech Stack Icons */}
          <Fade direction='up' duration={1600} delay={400} triggerOnce>
            <div className={styles.techStack}>
              <div className={styles.techIcons}>
                {techIcons.map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    <div className={styles.techIconBox}>{tech.icon}</div>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* CTA Buttons */}
          <Fade direction='up' duration={1500} delay={500} triggerOnce>
            <div className={styles.ctaButtons}>
              <button onClick={scrollToPortfolio} className={styles.btnPrimary}>
                <span className={styles.btnContent}>
                  Explore My Work
                  <MdOutlineKeyboardArrowRight
                    size={20}
                    className={styles.btnArrow}
                  />
                </span>
                <div className={styles.shimmer} />
              </button>

              <a
                href='https://drive.google.com/file/d/1M2Rt74ofQdwb9pV2zJnksoxYk-WD7JcC/view?usp=sharing'
                download={true}
                target='_blank'
                rel='noreferrer'
                className={styles.btnSecondary}
              >
                <span className={styles.btnContent}>
                  Download CV
                  <FaCloudDownloadAlt size={18} className={styles.btnIcon} />
                </span>
              </a>
            </div>
          </Fade>

          {/* Experience Badge */}
          <div className={styles.availableBadge}>
            <div className={styles.availableContent}>
              <div className={styles.availableDot} />
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <Fade direction='right' duration={2000} delay={300} triggerOnce>
          <div className={styles.heroImage}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor='#ffffff'
              glarePosition='all'
              glareBorderRadius='24px'
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2000}
              className={styles.tiltWrapper}
            >
              <div className={styles.imageGroup}>
                {/* Background Glow */}
                <div className={styles.imageGlow} />

                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <img
                    src='/HeroImage2.jpg'
                    alt='Deepak Ramani'
                    className={styles.image}
                  />
                </div>

                {/* Floating Elements */}
                <div className={styles.floatingRocket}>
                  <FaRocket className={styles.rocketIcon} />
                </div>
                <div className={styles.floatingDot} />
              </div>
            </Tilt>
          </div>
        </Fade>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollContent}>
          <span className={styles.scrollText}>Scroll Down</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
