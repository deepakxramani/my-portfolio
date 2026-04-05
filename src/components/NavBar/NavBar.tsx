"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import type { NavLink } from "@/types";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links: NavLink[] = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={styles.logo}>Deep.</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className={styles.desktopLinks}>
        {links.map(({ id, link }) => (
          <li key={id} className={styles.navItem}>
            <button onClick={() => scrollToSection(link)}>{link}</button>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className={styles.hamburger}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className={styles.mobileMenu}>
          {links.map(({ id, link }) => (
            <li key={id} className={styles.mobileItem}>
              <button onClick={() => scrollToSection(link)}>{link}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
