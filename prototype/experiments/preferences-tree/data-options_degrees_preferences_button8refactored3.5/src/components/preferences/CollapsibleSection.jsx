// components/CollapsibleSection.jsx
import { useState } from "react";
import styles from "./CollapsibleSection.module.css"; // optional: separate file

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  footer = null,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.panel}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <button className={styles.toggleBtn}>
          {isOpen ? "▼" : "▶"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}

      {isOpen && footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}