import React, { useState } from 'react';

function StateButton({ label, stateName, onStateChange, isActive: propIsActive })
{
  const [isActive, setIsActive] = useState(propIsActive); // Sync with prop
  
  const handleClick = () => {
    const newState = isActive ? 'defaultState' : stateName; // Toggle to default or stateName
    console.log('StateButton clicked:', label, 'newState:', newState);
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