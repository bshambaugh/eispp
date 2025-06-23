import React, { useState } from 'react';

function StateButton({ label, stateName, onStateChange }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newState = isActive ? 'state1' : stateName;
    setIsActive(!isActive);
    onStateChange(newState);
  };

  return (
    <button
      className={isActive ? 'selected' : ''}
      onClick={handleClick}
    >
     {label}
    </button>
  );
}

export default StateButton;