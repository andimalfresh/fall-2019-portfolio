import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header'
import Navigation from './components/Navigation/'
import About from './components/About/'
import Portfolio from './components/Portfolio/'
import Contact from './components/Contact/'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Route path='/' component= {Header}/>
        <Switch>
          <Route exact path='/' component={Navigation} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
