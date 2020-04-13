import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Dashboard from "../../src/Pattern8";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Register2 from "./Register2";

class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegisterClick: false,Email:'',password:''
    };
  }
  HandleClick = () => {
    //console.log("RegisterClick");
    this.setState({
      RegisterClick: true,
      LoginSucces: false,
      LoginGuest: false,
    });
  };

  HandleLoginSucces = (Email,pwd) => {
    console.log("LoginSucces",Email,pwd);
    this.setState({
      LoginSucces: true
    });
  };
  HandleLoginGuast = () => {
    this.setState({
      LoginGuest: true
    });
  };
  HandleInputChange = (e) => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
   // console.log("Received values of form: ", this.state.Email,this.state.password,e.target.value, e.target.name);
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
      if (this.state.LoginGuest) {
        return (
          <BrowserRouter>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Redirect to="/Dashboard"></Redirect>
          </BrowserRouter>
        );
      } else {
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
                <Button  
                  type={this.state.RegisterClick === false ? "primary" : ""}
                  style={{ textDecoration: "underline", color: "skyblue" ,borderBottomLeftRadius:20, borderTopLeftRadius:20}}
                >
                  Login     
                </Button>
                <Button
                  type={this.state.RegisterClick === true ? "primary" : ""}
                  onClick={this.HandleClick}
                  style={{ textDecoration: "underline", color: "skyblue" ,borderBottomRightRadius:20, borderTopRightRadius:20}}
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
                    <Input  style={{borderRadius:20}}
                      onChange={this.HandleInputChange}
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="password"
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
                    <Button  style={{borderRadius:20}}
                      onClick={() =>
                        this.HandleLoginSucces(
                          this.state.Email,
                          this.state.password
                        )
                      }
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                    <span style={{ marginLeft: 10, marginRight: 10 }}>
                      Or{" "}
                      <a onClick={this.HandleClick}>
                        register now!
                      </a>
                    </span>
                    <Button  style={{borderRadius:20}}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={this.HandleLoginGuast}
                    >
                      Log in as Guest
                    </Button>
                  </Form.Item>
                </Form>
                <Button onClick={()=>{
                  const {history}=this.props;
                  history.push('/Tes')

                }}>tes </Button>
              </div>
            </div>
          </BrowserRouter>
        );
      }
    }
  }
}

export default Login2;
