import { Menu } from "antd";
import React, { Component, useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { connect } from "react-redux";
import { dispatch } from "C:/Users/Nandar Nawadata/AppData/Local/Microsoft/TypeScript/3.1/node_modules/rxjs/internal/observable/pairs";

const { SubMenu } = Menu;
class App3 extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    this.props.ChangeDispatch();
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <MailOutlined />
          Navigation One{this.props.PopupProps}
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <AppstoreOutlined />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">{this.props.PopupProps}</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
const reduxState = state => {
  return {
    PopupProps: state.PopUp
  };
};

const reduxDispatch = dispatch => ({
  ChangeDispatch: () => dispatch(changetype())
});

const changetype = () =>(cxx)=> {
    setTimeout(() => {
      return cxx({
        type: "Change_Action_PopUp",
        value: " diubah"
      });
    }, 2000);
  
};
export default connect(reduxState,reduxDispatch)(App3);
