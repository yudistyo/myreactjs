import React, { useState } from 'react';
import Dashboard from './Patter7';
import App2 from './App2'
import AppNew from './AppNew'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  //const [Input, setInput] = useState('');
  return (
    <BrowserRouter>
      <div >
        <Dashboard />

      </div>
      <div style={{}}>
     
      </div>

    </BrowserRouter>
  );
}

export default App;

