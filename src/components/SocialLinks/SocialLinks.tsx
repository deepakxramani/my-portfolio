'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import styles from './SocialLinks.module.scss';

interface LinkItem {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: boolean;
}

const SocialLinks = () => {
  const links: LinkItem[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com/in/deepakxramani',
      style: 'first',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/deepakxramani',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:deepakramani65gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1GdwVv0kGd7KlQGMbDsNPlVIDaz0isJTN/view?usp=sharing',
      download: true,
    },
  ];

  return (
    <div className={styles.socialLinks}>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`${styles.linkItem} ${style === 'first' ? styles.first : ''}`}
          >
            <a
              href={href}
              className={styles.linkAnchor}
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
