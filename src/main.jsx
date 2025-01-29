import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { UnichambaApp } from './UnichambaApp.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UnichambaApp />
    </BrowserRouter>
  </StrictMode>,
)
