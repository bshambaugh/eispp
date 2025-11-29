import React, { useState } from 'react';
import TabbedTextField from './components/TabbedTextField.jsx'
import "./components/styles.css";
import DataOptionsForm from "./components/DataOptionsForm";

function PreferencesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGlobalChange = (event) => {
    setIsGlobal(event.target.checked);
  };

  return (
    <div>
      <h3>Preferences</h3>
      <div>
      By default when I run a Natural Language Query Show:
        <button onClick={handleToggle}>
          {isOpen ? '▼' : '▶'} 
        </button>
        {isOpen && (
          <div>
            <DataOptionsForm />
            <TabbedTextField />
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isGlobal}
            onChange={handleGlobalChange}
          />
          Make Global for All Data Visualization
        </label>
      </div>

      <p>Global: {isGlobal ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default PreferencesPanel;