import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/stylesGlobal.css"
import App from './app/App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
