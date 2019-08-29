import React from 'react'
import './App.css'
import Navigation from './components/Navigation/'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <div className="headerName">ANDREW PEDERSEN</div>
        <div className="jobTitle">developer</div> 
        </header>
        <Navigation />
      </div>
    </div>
  )
}

export default App
