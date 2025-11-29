import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PreferencesPanel from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreferencesPanel />
  </StrictMode>,
)
