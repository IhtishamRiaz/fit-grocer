import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <ScrollToTop />
         <App />
      </BrowserRouter>
   </React.StrictMode>,
)
