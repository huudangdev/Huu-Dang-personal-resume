import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/page/Home'


class App extends Component {
  render() { 
    return (  
      <Router>
        <div className='App'>
          <Route path='/' component={Home}/>
        </div>
      </Router>
    );
  }
}
 
export default App;
