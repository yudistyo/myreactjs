import React from 'react';
// import Dashboard from './Patter7';
// import SiderDemo from './Pattern8'
// import App2 from './App2'
// import AppNew from './AppNew'
// import firebase from './Firebase/Firebase'
import Register from './Register'
import { Route, Link} from "react-router-dom";

function Login() {

  return (

    <div style={{justifyContent:'center'}}>
      <table style={{}}>
        <tr>
          <td>Email</td>
          <td></td>
          <td><input type="text" placeholder="Email" style={{borderColor:'blue',borderRadius:20,width:200}}></input></td>

        </tr>
        <tr>
          <td>Password</td>
          <td></td>
          <td><input type="password" placeholder="Password" style={{borderColor:'blue',borderRadius:20,width:200}}></input></td>

        </tr>
      
        <tr>
          <td></td>
          <td></td>
          <td style={{justifyContent:'space-around'}}><button onClick={LoginBtn}>Login</button><button><Link to="/Reg">Register</Link></button></td>
          <td></td>

        </tr>
      </table>
     
        <Route path="/Reg" component={Register}></Route>
    </div>


  );
}
function LoginBtn(){
  alert('ok')
}

export default Login;

