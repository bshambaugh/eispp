import React, { createContext, useState } from 'react';
 
export const ViewStateContext = createContext();

export const ViewStateProvider = ({ children }) => {
  const [viewState, setViewState] = useState('defaultState');

  const handleViewChange = (newState) => {
    setViewState(newState);
  };

  return (
    <ViewStateContext.Provider value={{ viewState, handleViewChange }}>
        {children}
    </ViewStateContext.Provider>
  );

};