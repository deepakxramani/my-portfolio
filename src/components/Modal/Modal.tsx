"use client";

import React, { useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.scss";

interface ModalProps {
  visible: boolean;
  onHide: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onHide, header, children }) => {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onHide();
    },
    [onHide]
  );

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [visible, handleEscape]);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={onHide}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerContent}>{header}</div>
          <button className={styles.closeBtn} onClick={onHide}>
            <FaTimes size={18} />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
