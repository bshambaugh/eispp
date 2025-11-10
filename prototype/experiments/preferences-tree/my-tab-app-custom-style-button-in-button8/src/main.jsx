import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TabbedTextField from './components/TabbedTextField.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabbedTextField />
  </StrictMode>,
)
