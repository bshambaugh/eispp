import React, { useState } from 'react'
import './App.css'

import { Header, MainContent } from 'components';

/*
import Header from './components/Header/Header.jsx'
import MainContent from './components/Main-Content/MainContent.jsx'
*/

function App() {

    const [viewState, setViewState] = useState('defaultState'); // Move state here
  
    const handleViewChange = (newState) => {
      setViewState(newState); // Move state update here
    };

  return (
    <div className="container">
        <Header/>
        <MainContent  viewState={viewState} onViewChange={handleViewChange}/>
    </div>
 )
}

export default App;
