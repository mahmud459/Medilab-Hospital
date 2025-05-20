import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './hero.css'
import './About.css'
import './Services.css'
import './Departments.css'
import './Doctors.css'
import './Questions.css'
import './Gelery.css'
import './Contact.css'
import './Footer.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
