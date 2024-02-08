import { useState } from 'react'
import './App.css'
import './styles/tailwind.css';
import Routes from './routes';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <div className="app-container">

      <Routes />
      <Footer></Footer>
    </div>
  )
}

export default App
