import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThreatMap from './components/SecurityTools/Tools/ThreatMap'
import SecurityNews from './components/SecurityTools/Tools/SecurityNews'
import SecurityTools from './components/SecurityTools/SecurityTools'
import BreachExposureChecker from './components/SecurityTools/Tools/BreachExposureChecker'
import Header from './components/Header/Header'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SecurityTools/>
  </StrictMode>,
)