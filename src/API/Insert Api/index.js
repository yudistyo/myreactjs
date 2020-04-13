import React, { Component } from "react";
import Axios from "axios";
import { Table, Input, Button, Icon, Modal } from "antd";
import { Switch, Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import ShowApi from "../Show Api";
import {urlOffline, urlOnline} from '../../API'

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      name: "",
      email: "",
      ReturnAction: false
    };
  }
  componentDidMount = () => {};

  PostApi = (name, email) => {
    //console.log('name api: ',this.state.name,' email : ',this.state.email)
    const paramdata = {
      name: name,
      email: email,
      body:
        "react cvnet netlify com"
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Expose-Headers": "*",
      Allow: "*",
      "Content-Type": "application/json"
    };
    console.log("Pre-fetch check==>");
    Axios.post(urlOnline, paramdata, {
      headers,
      mode: "no-cors"
    })
      .then(res => {
        //console.log("res data==>", res, paramdata, headers);
        if (res.status === 201) {
          this.setState({
            ReturnAction: true
          });
        }
      })
      .catch(error => {
        console.log("res error==>", error, paramdata, headers);
      });
  };

  OnchangeText = e => {
    this.setState({ [e.target.placeholder]: e.target.value });
    //console.log('name 1 : ',this.state.name,' email : ',this.state.email);
  };
  HandleOnOkModal = () => {
    if (this.state.name !== "" && this.state.email !== "") {
      this.PostApi(this.state.name, this.state.email);
    }
  };
  HandleOnCancelModal = () => {
    this.setState({ visible: false, ReturnAction: true });
  };

  render() {
    if (this.state.ReturnAction) {
      return (
        <div>
          <Route path="/Show data api" component={ShowApi}></Route>
          <Redirect to="/Show data api"></Redirect>
        </div>
      );
    } else {
      return (
        <div style={{ position: "fixed" }}>
          <Modal
            okText="Insert data"
            confirmLoading={this.state.email === "" ? true : false}
            style={{ fontWeight: "bolder" }}
            title="Data Insert"
            visible={this.state.visible}
            onOk={this.HandleOnOkModal}
            onCancel={this.HandleOnCancelModal}
          >
            {
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                  onChange={this.OnchangeText}
                  style={{ marginBottom: 20, padding: 10, borderRadius: 10 }}
                  placeholder="name"
                ></Input>
                <Input
                  onChange={this.OnchangeText}
                  style={{ marginBottom: 20, padding: 10, borderRadius: 10 }}
                  placeholder="email"
                ></Input>
              </div>
            }
          </Modal>
        </div>
      );
    }
  }
}

export default componentName;
