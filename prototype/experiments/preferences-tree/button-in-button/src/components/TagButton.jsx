import React from 'react';
import styles from './TagButton.module.css';

const TagButton = ({ text = 'Hide Type', onRemove }) => {
  const handleRemove = () => {
    if (onRemove) onRemove();
  };

  return (
    <div className={styles.parentButton}>
      <span className={styles.text}>{text}</span>
      <span className={styles.closeContainer} onClick={handleRemove}>
        X
      </span>
    </div>
  );
};

export default TagButton;