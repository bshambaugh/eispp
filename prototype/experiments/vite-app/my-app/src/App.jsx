import React, { useState } from 'react';
import './scss/main.scss'; // Assuming SCSS setup
import { Header, MainContent } from 'components';

function App() {

    const [activeStates, setActiveStates] = useState(['defaultState']); // Array of active states

    const handleViewChange = (newState) => {
      setActiveStates((prevStates) => {
        console.log('handleViewChange: newState=', newState, 'prevStates=', prevStates, 'activeStates', activeStates);
        if (newState !== 'defaultState') {
          return prevStates.includes(newState)
          ? prevStates.filter((state) => state !== newState) // Remove if exists
          : [...prevStates, newState]; // Add if not exists
        } else {
         return prevStates;
         // return [...prevStates, newState];
        }
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