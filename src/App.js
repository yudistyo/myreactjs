import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppNew from './AppNew'
import App2 from './App2'

function App() {
  const [Input, setInput] = useState('');
  //console.log(change())
  return (
      <div style={{ flex: 1 }}>
APP
        <div>
          <img src={logo} style={{ with: 150, height: 150 }}></img>
        </div>
        <div style={{ }}>
          <Link to="/AppNew">AppNew</Link>
          <Link to="/App2">App2</Link>
        </div>
        <Switch>
          <Route path="/AppNew" component={AppNew}></Route>
          <Route path="/App2" component={App2}></Route>
        </Switch>

      </div>
  );
}

export default App;
const change = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="./AppNew" component={AppNew} />
      </BrowserRouter>
    </div>
  );
}