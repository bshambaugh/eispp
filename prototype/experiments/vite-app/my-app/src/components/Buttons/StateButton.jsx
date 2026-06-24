// src/components/Buttons/StateButton.jsx
import React from 'react';

function StateButton({ label, stateName, onStateChange, isActive: propIsActive }) {
  const handleClick = () => {
    onStateChange(stateName); // Trigger state change in parent
  };

  return (
    <button
      className={propIsActive ? 'selected' : ''}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default StateButton;
