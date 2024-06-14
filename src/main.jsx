import React from 'react'
import ReactDOM from 'react-dom/client'
import { Qrcode } from './components/qrcode.jsx'
import "./components/qrcode.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Qrcode />
  </React.StrictMode>,
)
