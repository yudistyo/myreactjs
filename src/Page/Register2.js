import React, { Component } from "react";
import { Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom";
import Login2 from "./Login2";

class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginClick:false
    };
  }
  HandleClick = () => {
    //console.log("RegisterClick");
    this.setState({
      LoginClick: true
    });
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
          <span onClick={this.HandleClick} style={{ textDecoration: "underline", color: "skyblue" }}>
            Login|
          </span>{" "}
          <span  style={{ textDecoration: "underline", color: "skyblue" }}>
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
            <Form.Item
              name="Retypepassword"
              rules={[
                {
                  required: true,
                  message: "Please input Retype your Password!"
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Retype Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
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
