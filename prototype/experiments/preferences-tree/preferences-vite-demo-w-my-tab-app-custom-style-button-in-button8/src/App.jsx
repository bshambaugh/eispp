import React, { useState } from 'react';
import TabbedTextField from './components/TabbedTextField.jsx'

function PreferencesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('OPM');
  const [isGlobal, setIsGlobal] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
            <label>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="OPM">OPM</option>
                <option value="Node-Link Diagram">Node-Link Diagram</option>
                <option value="Facetted Browsing">Facetted Browsing</option>
              </select>
            </label>
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

      <p>Selected Option: {selectedOption}</p>
      <p>Global: {isGlobal ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default PreferencesPanel;