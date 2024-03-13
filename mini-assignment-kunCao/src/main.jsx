import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CountProvider } from './CountProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
     <App />
    </CountProvider>
   
  </React.StrictMode>,
)
