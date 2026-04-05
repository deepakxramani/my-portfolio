"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      {/* Background */}
      <div className={styles.bgElements}>
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />
      </div>

      <div className={styles.container}>
        <Fade duration={1000} delay={50} cascade triggerOnce>
          <div className={styles.header}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.subtitle}>
              Submit the form below to get in touch with me
            </p>
          </div>
        </Fade>

        <Fade duration={1000} delay={100} cascade triggerOnce>
          <div className={styles.formWrapper}>
            <form
              action="https://getform.io/f/ad0c81f8-99cc-4635-bb2f-6229e0b524b8"
              method="POST"
              className={styles.form}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
              />

              <textarea
                name="message"
                rows={10}
                placeholder="Enter your message"
                className={styles.textarea}
              />

              <button type="submit" className={styles.submitBtn}>
                Let&apos;s talk
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
