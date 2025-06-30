import React from 'react';
import './App.css';
import { ViewStateProvider } from './context/ViewStateContext.jsx';
import { Header, MainContent } from 'components';

function App() {
  return (
    <ViewStateProvider>
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </ViewStateProvider>
  );
}

export default App;