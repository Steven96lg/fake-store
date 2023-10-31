import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
