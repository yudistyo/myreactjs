import React, { Component } from "react";
import Axios from "axios";
import { Table, Input, Button, Icon, Modal } from "antd";
import { Switch, Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import ShowApi from '../Show Api'

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      Address: "",
      City: "",
      ReturnAction: false
    };
  }
  componentDidMount = () => {};

  PostApi = (address, city) => {
    //console.log('Address api: ',this.state.Address,' City : ',this.state.City)
    const paramdata = {
      address: city,
      city: address,
      custTypeCd: "",
      fedId: "",
      postalCode: "",
      state: "React",
      business: null,
      individual: null,
      account: [],
      officer: []
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
    Axios.post("http://www.cv.somee.com/c", paramdata, {
      headers,
      mode: "no-cors"
    }).then(res => {
      //console.log("res data==>", res, paramdata, headers);
      if(res.status===201){
        this.setState({
          ReturnAction:true
        })
      }
    })
    .catch((error)=>{
      console.log("res error==>", error, paramdata, headers);
    })
  };

  OnchangeText = e => {
    this.setState({ [e.target.placeholder]: e.target.value });
    //console.log('Address 1 : ',this.state.Address,' City : ',this.state.City);
  };
  HandleOnOkModal = () => {
    if (this.state.Address !== "" && this.state.City !== "") {
      this.PostApi(this.state.Address, this.state.City);
    }
  };
  HandleOnCancelModal = () => {
    this.setState({ visible: false, ReturnAction:true});
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
          <Modal okText='Insert data' confirmLoading={this.state.City=== '' ? true:false}
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
                  placeholder="Address"
                ></Input>
                <Input
                  onChange={this.OnchangeText}
                  style={{ marginBottom: 20, padding: 10, borderRadius: 10 }}
                  placeholder="City"
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
