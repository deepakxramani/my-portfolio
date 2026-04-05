'use client';

import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styles from './TypedText.module.scss';

const TypedText = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Video Editor', 'Web Designer'],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.typedWrapper}>
      <span ref={el} />
    </div>
  );
};

export default TypedText;
