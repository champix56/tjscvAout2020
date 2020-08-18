import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Mybutton from './Mybutton2/Mybutton2';
import Tchat from './Tchat/Tchat';
function App() {
  return (
    <div className="App">
    <Tchat user={{id:1,name:'Alex'}}></Tchat>
    </div>
  );
}

export default App;
