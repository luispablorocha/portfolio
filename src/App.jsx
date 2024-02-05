import { useState } from 'react'
import './App.css'
import './styles/tailwind.css';
import Routes from './routes';
import Header from './components/HeaderComponent';

function App() {
  return (
    <div className="app-container">

      <Routes />
    </div>
  )
}

export default App
