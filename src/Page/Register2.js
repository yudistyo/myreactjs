import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login2 from "./Login2";
import firebase from '../Firebase/Firebase'

class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginClick: false,
      Email: '',
      Password: '',
      Retypepassword:'',
    };
  }
  HandleClick = () => {
    //console.log("RegisterClick");
    this.setState({
      LoginClick: true
    });
  };
  RegisterClick=(email,pwd,retypepwd)=>{
    console.log('email :',email,' password :',pwd,'RetypePassword',retypepwd,pwd.lenght)
    if(pwd===retypepwd && pwd!=='' && email!=='' && retypepwd!==''){
      firebase.auth().createUserWithEmailAndPassword(email, pwd)
      .then(res=>console.log('succes,',res))
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode+errorMessage)
        });
    }else{
      if(pwd!=='' && retypepwd!=='' ){
        alert(`Password and Retype password must be equals` )
      }
      
    }
  }
 
  HandleInputChange = (e) => {
    this.setState({
      [e.target.placeholder]:e.target.value
    });
    console.log('target placeholder :',e.target.placeholder,' value :',e.target.value,'state email',this.state.Email)
  };

  render() {

  
    const onFinish = values => {
      console.log("Received values of form: ", values);
    };

    if (this.state.LoginClick) {
      return (
        <BrowserRouter>
          <Route path="/Login" component={Login2}></Route>
          <Redirect to="/Login"></Redirect>
        </BrowserRouter>
      );
    } else {
      return (
        <div
          style={{
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ fontSize: 20, marginBottom: 20, fontWeight: "bolder" }}>
            <Button
              onClick={this.HandleClick}
              type={this.state.LoginClick === true ? "primary" : ""}
              style={{ textDecoration: "underline", color: "skyblue",borderBottomLeftRadius:20, borderTopLeftRadius:20}}
            >
              Login
            </Button>
            <Button
              type={this.state.LoginClick === false ? "primary" : ""}
              style={{ textDecoration: "underline", color: "skyblue",borderBottomRightRadius:20, borderTopRightRadius:20 }}
            >
              Register
            </Button>
          </div>
          <div
            style={{
              width: 400,
              border: "1px solid skyblue",
              padding: 20,
              borderRadius: 20
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
            >
              <Form.Item>
                <label
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bolder"
                  }}
                >
                  Form Register
                </label>
              </Form.Item>
              <Form.Item
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email"
                  }
                ]}
              >
                <Input style={{borderRadius:20}}
                  onChange={this.HandleInputChange}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]}
              >
                <Input onChange={this.HandleInputChange} style={{borderRadius:20}}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="Retypepassword"
                rules={[
                  {
                    required: true,
                    message: "Please input Retype your Password!"
                  }
                ]}
              >
                <Input onChange={this.HandleInputChange} style={{borderRadius:20}}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Retypepassword"
                />
              </Form.Item>

              <Form.Item>
                <Button style={{borderRadius:20}}
                  onClick={()=>this.RegisterClick(this.state.Email,this.state.Password,this.state.Retypepassword)}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }
  }
}

export default Register2;
