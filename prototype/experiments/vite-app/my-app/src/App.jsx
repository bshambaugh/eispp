import React, { useState } from 'react';
import './scss/main.scss'; // Assuming SCSS setup
import { Header, MainContent } from 'components';

function App() {

    const [activeStates, setActiveStates] = useState(['defaultState']); // Array of active states

    const handleViewChange = (newState) => {
       setActiveStates((prevStates) => {
          console.log('handleViewChange: newState=', newState, 'prevStates=', prevStates);
          if (newState === 'defaultState') {
            // Deactivate the clicked state by removing it
            return prevStates.filter((state) => state !== newState);
          } else {
            // Toggle the new state
            return prevStates.includes(newState)
          ? prevStates.filter((state) => state !== newState) // Deactivate if already active
          : [...prevStates, newState]; // Activate if not active
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