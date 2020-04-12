import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Modal } from "antd";
import { Switch, Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import DashBoard from "../../src/Pattern8";
import Login from './Login2'

class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,GotoLogin:false
    };
  }
  HandleOnOkModal = () => {
      
    this.setState({
        GotoLogin:true,visible: false
      });
  };
  HandleOnCancelModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
      //alert('vis : '+this.state.visible+' Log:'+this.state.GotoLogin)
    if (!this.state.visible) {
        if(this.state.GotoLogin){
            return (
                <BrowserRouter>
                  <Redirect to="/Login" />
                  <Route path="/Login" component={Login}></Route>
                </BrowserRouter>
              );
        }else{
            return (
                <div>
                  <Redirect to="/Home" />
                  <Route path="/Home" component={DashBoard}></Route>
                </div>
              );
        }
     
    } else {
      return (
        <Modal backgroundColor='blue' confirmLoading={false}  cancelText='No, i want go to back' okText='Yes iam sure' okType='danger'
          style={{ fontWeight: "bolder" ,backgroundColor:'navy'}}
          title="Log Out Warning"
          visible={this.state.visible}
          onOk={this.HandleOnOkModal} 
          onCancel={this.HandleOnCancelModal}
        >
          Are you sure to Log Out?
        </Modal>
      );
    }
  }
}

export default componentName;
