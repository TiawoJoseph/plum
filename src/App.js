
import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Part from './components/sections';

class App extends React.Component {
  render(){
  return (
    <Router>    
     <div>
         
          
           <Part />
          </div>  
    </Router>
  );
}
}

export default App;
