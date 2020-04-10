import React, { useState } from 'react';
// import Dashboard from './Patter7';
// import SiderDemo from './Pattern8'
// import App2 from './App2'
// import AppNew from './AppNew'
// import firebase from './Firebase/Firebase'
import LoginPage from './Login'
import firebase from '../Firebase/Firebase'

import { Route, Link} from "react-router-dom";

function Login() {
    const[email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')
  
    function registeBtn(email,pwd){
        console.log('email :',email.email,' password :',pwd.pwd)
        firebase.auth().createUserWithEmailAndPassword(email.email, pwd.pwd)
        .then(res=>console.log('succes,',res))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error',errorCode,errorMessage)
          });
    }
    function changeHandleEmail(e){
setEmail(e.target.value)
    }
    function changeHandlePwd(e){
        setPwd(e.target.value)
            }
           
   
  return (

    <div style={{justifyContent:'center'}}>
      <table style={{}}>
        <tr>
          <td>Email</td>
          <td></td>
          <td><input onChange={changeHandleEmail} type="text" placeholder="Email" style={{borderColor:'blue',borderRadius:20,width:200}}></input></td>

        </tr>
        <tr>
          <td>Password</td>
          <td></td>
          <td><input onChange={changeHandlePwd} type="password" placeholder="Password" style={{borderColor:'blue',borderRadius:20,width:200}}></input></td>

        </tr>
        <tr>
          <td>Retype Password</td>
          <td>{pwd}</td>
          <td><input onChange={changeHandlePwd}  type="password" placeholder="Retype Password" style={{borderColor:'blue',borderRadius:20,width:200}}></input></td>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td style={{justifyContent:'space-around'}}><button onClick={()=>registeBtn({email},{pwd})}>Register</button><button><Link to='/login'>Login</Link></button></td>
          <td></td>

        </tr>
      </table>
          <Route path='/login' component={LoginPage}></Route>
    </div>


  );
}

export default Login;



