import React, { useState } from 'react'
import './App.css'

import Header from './components/Header/Header.jsx'
import MainContent from './components/Main-Content/MainContent.jsx'

function App() {

  return (
    <div className="container">
        <Header/>
        <MainContent/>
    </div>
 )
}

export default App;
