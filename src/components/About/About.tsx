'use client';

import React from 'react';
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
} from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import type { TimelineItem } from '@/types';
import styles from './About.module.scss';

const About = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2025',
      title: 'SDE-1 (Software Engineer)',
      company: 'Tech Matpatra Pvt. Ltd.',
      role: 'Full Stack Developer',
      duration: 'Jan 2025 - Present',
      icon: <FaRocket className={styles.iconBlue} />,
      type: 'professional',
      status: 'current',
    },
    {
      year: '2023-2024',
      title: 'Full Stack Developer Intern',
      company: 'Numeric Infosystem Pvt. Ltd.',
      role: 'Full Stack Developer',
      duration: 'June 2023 - Jan 2024 (8 Months)',
      icon: <FaBriefcase className={styles.iconGreen} />,
      type: 'professional',
      status: 'completed',
    },
    {
      year: '2021-2024',
      title: "Bachelor's in Computer Application",
      company: 'Jiwaji University Gwalior',
      duration: '2021 - 2024',
      icon: <FaGraduationCap className={styles.iconPurple} />,
      type: 'education',
      status: 'completed',
    },
    {
      year: '2021',
      title: 'Intermediate (12th)',
      company: 'San Marino Public Higher Secondary School',
      role: 'Commerce + Maths',
      duration: '',
      icon: <FaGraduationCap className={styles.iconYellow} />,
      type: 'education',
      status: 'completed',
    },
    {
      year: '2019',
      title: 'Primary Education (10th)',
      company: 'San Marino Public Higher Secondary School',
      role: '',
      duration: '',
      icon: <FaGraduationCap className={styles.iconRed} />,
      type: 'education',
      status: 'completed',
    },
  ];

  return (
    <div id='about' className={styles.about}>
      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
        <div className={styles.blobCenter} />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <Fade direction='down' duration={1500} triggerOnce>
            <div className={styles.header}>
              <p className={styles.title}>My Journey</p>
              <p className={styles.subtitle}>
                Tracing my path from education to professional growth
              </p>
            </div>
          </Fade>

          {/* Timeline */}
          <div className={styles.timeline}>
            {/* Vertical Line */}
            <div className={styles.timelineLine} />

            {/* Timeline Items */}
            <div className={styles.timelineItems}>
              {timelineData.map((item, index) => (
                <Fade
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  duration={1500}
                  delay={200}
                  triggerOnce
                >
                  <div
                    className={`${styles.timelineItem} ${
                      index % 2 === 0 ? styles.left : styles.right
                    }`}
                  >
                    {/* Node */}
                    <div
                      className={`${styles.timelineNode} ${
                        item.status === 'current' ? styles.nodeCurrentPulse : ''
                      }`}
                    >
                      <div
                        className={`${styles.nodeDot} ${
                          item.status === 'current'
                            ? styles.nodeCurrent
                            : item.type === 'professional'
                              ? styles.nodeProfessional
                              : styles.nodeEducation
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <div className={styles.cardWrapper}>
                      <div
                        className={`${styles.card} ${
                          item.status === 'current'
                            ? styles.cardCurrent
                            : item.type === 'professional'
                              ? styles.cardProfessional
                              : styles.cardEducation
                        }`}
                      >
                        {/* Year Badge */}
                        <div
                          className={`${styles.yearBadge} ${
                            item.status === 'current'
                              ? styles.badgeCurrent
                              : item.type === 'professional'
                                ? styles.badgeProfessional
                                : styles.badgeEducation
                          }`}
                        >
                          {item.icon}
                          <span className={styles.yearText}>{item.year}</span>
                        </div>

                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardCompany}>{item.company}</p>

                        {item.role && (
                          <p className={styles.cardRole}>{item.role}</p>
                        )}

                        {item.duration && (
                          <p
                            className={`${styles.cardDuration} ${
                              item.status === 'current'
                                ? styles.durationCurrent
                                : ''
                            }`}
                          >
                            {item.duration}
                          </p>
                        )}

                        {item.status === 'current' && (
                          <div className={styles.currentBadge}>
                            <div className={styles.currentDot} />
                            Current Position
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>

            {/* Start Point */}
            <div className={styles.startPoint}>
              <FaMapMarkerAlt className={styles.mapIcon} />
            </div>
          </div>

          {/* Journey Summary */}
          <Fade direction='up' duration={1200} delay={400} triggerOnce>
            <div className={styles.summaryGrid}>
              <div className={`${styles.summaryCard} ${styles.summaryCyan}`}>
                <div className={styles.summaryNumber}>1+</div>
                <div className={styles.summaryLabel}>Years Experience</div>
              </div>
              <div className={`${styles.summaryCard} ${styles.summaryGreen}`}>
                <div className={styles.summaryNumber}>2</div>
                <div className={styles.summaryLabel}>Companies Worked</div>
              </div>
              <div className={`${styles.summaryCard} ${styles.summaryPurple}`}>
                <div className={styles.summaryNumber}>5+</div>
                <div className={styles.summaryLabel}>Projects Completed</div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
