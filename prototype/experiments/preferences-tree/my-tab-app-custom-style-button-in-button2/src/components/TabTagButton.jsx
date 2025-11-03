// src/components/TabTagButton.jsx
import React from 'react';
import styles from './TabTagButton.module.css';

/**
 * Props
 * ─────
 * text      : string   – the tab label
 * onClick   : () => void – click on the whole tag (activates the tab)
 * onRemove  : () => void – click on the X
 * className : string   – optional extra class (used for .active)
 */
const TabTagButton = ({
  text = 'Tab',
  onClick,
  onRemove,
  className = '',
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.();
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`${styles.parentButton} ${className}`}
      onClick={handleClick}
    >
      <span className={styles.text}>{text}</span>

      <span className={styles.closeContainer} onClick={handleRemove}>
        ×
      </span>
    </div>
  );
};

export default TabTagButton;
