import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { StructureContextProvider } from './context/StructureContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StructureContextProvider>
      <App />
    </StructureContextProvider>
  </StrictMode>,
)
