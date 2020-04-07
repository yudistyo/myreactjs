import React, { useState } from 'react';
import Dashboard from './Patter7';
import SiderDemo from './Pattern8'
import App2 from './App2'
import AppNew from './AppNew'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div >
        <SiderDemo></SiderDemo>
      </div>
      <div style={{}}>

      </div>

    </BrowserRouter>
  );
}

export default App;

