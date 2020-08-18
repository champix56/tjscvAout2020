import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Mybutton from './Mybutton2/Mybutton2';
import Tchat from './Tchat/Tchat';
import TchatLogin from './TchatLogin/TchatLogin';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/tchat">
            <Tchat user={{ id: 1, name: 'Alex' }}></Tchat>
          </Route>
          <Route path="/">
            <TchatLogin >
              <Link to="/tchat">Connexion</Link>
            </TchatLogin>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
