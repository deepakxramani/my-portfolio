'use client';

import React from 'react';
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {
  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.infoSection}>
          <h2 className={styles.name}>Deepak Ramani</h2>
          <p className={styles.quote}>
            I&apos;m not gonna run away, I never go back on my word! That&apos;s
            my nindo: my ninja way!;
          </p>
        </div>

        <div className={styles.socialSection}>
          <h2 className={styles.getInTouch}>Get in Touch</h2>
          <div className={styles.socialLinks}>
            <a
              href='https://www.linkedin.com/in/deepakxramani/'
              target='_blank'
              rel='noreferrer'
              className={styles.socialLink}
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href='https://github.com/deepakxramani'
              target='_blank'
              rel='noreferrer'
              className={styles.socialLink}
            >
              <BsGithub size={30} />
            </a>
            <a
              href='https://x.com/deepakxramani'
              target='_blank'
              rel='noreferrer'
              className={styles.socialLink}
            >
              <BsTwitterX size={30} />
            </a>
            <a
              href='https://www.instagram.com/deepakxramani/'
              target='_blank'
              rel='noreferrer'
              className={styles.socialLink}
            >
              <BsInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          Copyright &#169; 2026{' '}
          <button onClick={scrollToHome} className={styles.copyrightLink}>
            Deepak Ramani
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
