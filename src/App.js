import React from "react";
//import Dashboard from "./Patter7";
//import SiderDemo from "./Pattern8";
//import App3 from './API/Show Api';
//import Register2 from './Page/Register2';
import firebase from "./Firebase/Firebase";
//import Login from "./Page/Login";
//import Register from "./Page/Register";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import Login2 from "./Page/Login2";
//import Tes from './Tes'
import Corona from "./Corona";

function App() {
  console.log(firebase);
  // let hist=useHistory()
  // console.log('history ==>',hist)
  return (
    <BrowserRouter>
     
      <Provider store={store}>
      <Corona></Corona>
        <Route path="/Login" component={Login2}></Route>
        {/* <Route path='/Tes' component={Tes}></Route> */}
        <Redirect to="/Login"></Redirect>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
