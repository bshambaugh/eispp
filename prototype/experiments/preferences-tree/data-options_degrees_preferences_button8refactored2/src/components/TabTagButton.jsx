import React from 'react';
import styles from './TabTagButton.module.css';

const TabTagButton = ({
  text = 'Tab',
  onClick,
  onRemove,
  isActive = false,
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
      className={`${styles.parentButton} ${isActive ? styles.active : ''}`}
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