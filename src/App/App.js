import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Mybutton from './Mybutton2/Mybutton2';
import Tchat from './Tchat/Tchat';
import TchatLogin from './TchatLogin/TchatLogin';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Tchat user={{id:1,name:'Alex'}}></Tchat> */}
        <TchatLogin >
          <Link to="/tchat">Connexion</Link>
        </TchatLogin>
      </div>
    </Router>
  );
}

export default App;
