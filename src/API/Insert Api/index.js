import React, { Component } from "react";
import Axios from "axios";
import { Table, Input, Button, Icon, Modal } from "antd";
import { Switch, Link, Route,BrowserRouter } from 'react-router-dom'

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,Address:'',City:''
    };
  }
  componentDidMount = () => {};

  PostApi = (address,city) => {
    //console.log('Address api: ',this.state.Address,' City : ',this.state.City)
    const paramdata={
        
            
            "address": city,
            "city": address,
            "custTypeCd": "I",
            "fedId": "111-11-1111",
            "postalCode": "01940",
            "state": "MA",
            "business": null,
            "individual": null,
            "account": [],
            "officer": []
        
    }
    const headers={
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Expose-Headers':'*',
        'Allow':'*',
        'Content-Type':'application/json'
    }
    console.log("Pre-fetch check==>");
    Axios.post("http://localhost:89/api/j",paramdata,{headers,mode:'cors',withCredentials:false}).then(res => {
      console.log("res data==>", res,paramdata,headers);     
    });
  };

  OnchangeText=(e)=>{
    
    this.setState({[e.target.placeholder]:e.target.value})
    //console.log('Address 1 : ',this.state.Address,' City : ',this.state.City);
  }

  render() {

    return (
      <div style={{ position: "fixed" }}>
        <Modal
          style={{ fontWeight: "bolder" }}
          title="Data Insert"
          visible={this.state.visible}
          onOk={() => this.PostApi(this.state.Address,this.state.City)}
          onCancel={() => this.setState({ visible: false })}
        >
          {
            <div style={{display:'flex',flexDirection:'column'}}>
              <Input onChange={this.OnchangeText} style={{marginBottom:20,padding:10,borderRadius:10}} placeholder="Address"></Input>
              <Input onChange={this.OnchangeText} style={{marginBottom:20,padding:10,borderRadius:10}} placeholder="City"></Input>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

export default componentName;
