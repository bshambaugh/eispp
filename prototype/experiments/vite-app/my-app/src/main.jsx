import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
//import ErrorBoundary from './ErrorBoundary.old.jsx'
import { ErrorBoundary } from 'components/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
     <App />
    </ErrorBoundary>
  </StrictMode>,
)
