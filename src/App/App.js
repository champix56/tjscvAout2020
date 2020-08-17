import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Mybutton from './Mybutton2/Mybutton2';
function App() {
  return (
    <div className="App">
      <Mybutton buttononclick={()=>{
        console.log('%c%s','font-size:48pt;color:tomato;','button clicked')
        // confirm()
      }}>
        <img alt="logo" src="/img/lambda.png"/>Mon button
      </Mybutton>
    </div>
  );
}

export default App;
