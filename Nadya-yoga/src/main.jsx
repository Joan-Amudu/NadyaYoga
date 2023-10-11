import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <App />  
    <Footer />
  </React.StrictMode>,
)
