import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Dashboard from "../../src/Pattern8";

import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom";
import Register2 from "./Register2";

class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegisterClick: false
    };
  }
  HandleClick = () => {
    //console.log("RegisterClick");
    this.setState({
      RegisterClick: true, LoginSucces:false
    });
  };

  HandleLoginSucces = () => {
    //console.log("LoginSucces");
    this.setState({
      LoginSucces: true
    });
  };

  render() {
    const onFinish = values => {
      console.log("Received values of form: ", values);
    };
    if (this.state.RegisterClick) {
      
        return (
          <BrowserRouter>
            <Route path="/Registrasi" component={Register2}></Route>
            <Redirect to="/Registrasi"></Redirect>
          </BrowserRouter>
        );
      
    
    } else {
      if(this.state.LoginSucces){
      return (
        <BrowserRouter>
          <Route path="/Dashboard" component={Dashboard}></Route>
          <Redirect to="/Dashboard"></Redirect>
        </BrowserRouter>
      );
    
    }else{
      return (
        <BrowserRouter>
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
            <div
              style={{ fontSize: 20, marginBottom: 20, fontWeight: "bolder" }}
            >
              <span
               
                style={{ textDecoration: "underline", color: "skyblue" }}
              >
                Login|
              </span>
              <span  onClick={this.HandleClick} style={{ textDecoration: "underline", color: "skyblue" }}>
                Register
              </span>
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
                    Form Login
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
                  <Input
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
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button" onClick={this.HandleLoginSucces}
                  >
                    Log in
                  </Button>
                  <span style={{ marginLeft: 10 }}>
                    Or <a href="http://localhost:3000/Registrasi">register now!</a>
                  </span>
                </Form.Item>
              </Form>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}}

export default Login2;
