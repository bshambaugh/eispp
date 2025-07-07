import React, { useState } from 'react';
import './scss/main.scss';
import { Header, MainContent } from 'components';

function App() {
  const [activeStates, setActiveStates] = useState(['defaultState']);

  const handleViewChange = (newState) => {
    setActiveStates((prevStates) => {
      console.log('handleViewChange: newState=', newState, 'prevStates=', prevStates, 'activeStates', activeStates);
      
      if (newState !== 'defaultState') {
        // Remove if exists, add if not exists, and remove defaultState
        const newStates = prevStates.includes(newState)
          ? prevStates.filter((state) => state !== newState) // Remove if exists
          : [...prevStates.filter((state) => state !== 'defaultState'), newState]; // append newState if it does not exist, 
         // remove 'defaultState' if it exists in prevStates
        
        // If no states remain after filtering, return ['defaultState']
        return newStates.length > 0 ? newStates : ['defaultState'];
      }
      
      // If newState is 'defaultState', return current states
      return prevStates;
    });
  };

  return (
    <div className="container">
      <Header />
      <MainContent activeStates={activeStates} onViewChange={handleViewChange} />
    </div>
  );
}

export default App;