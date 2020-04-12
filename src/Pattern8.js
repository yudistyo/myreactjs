import { Switch, Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Card,Modal } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  CaretRightFilled,
  TeamOutlined,
  SyncOutlined,
  UserOutlined,
  LogoutOutlined,
  ReloadOutlined
} from "@ant-design/icons";
import React from "react";
import MenuSideBar from "./Sidebar/SideMenu";
import Lorem from "./Lorem/Lorem";
import Youtube from "./Youtube";
import Description from "./Description";
import Project from "./Project";
import Gallery from "./Gallery";
import ShowApi from "./API/Show Api";
import InsertApi from "./API/Insert Api";
import About from "./Page/About";
import Contact from "./Page/Contact";
import SecretMessage from "./Message/SecretMessage";
import PublicMessage from "./Message/Public Message";
import PrivateMessage from "./Message/Private Message";
import Login from "./Page/Login2";
import Logout from "./Page/Logout";
import UpdateApi from "./API/Update Api";
import DeleteApi from "./API/Delete Api";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    spinProfile: false,
    spinMessage: false,
    spinTespage: false,
    Breadcrumb: "Home",
    SpinLoading: false,
    visible:false,GotoLogin:false
  };
  HandleOnCancelModal = () => {
    this.setState({
      visible: false
    });
  };
  HandleOnOkModal = () => {
    this.setState({
        GotoLogin:true,visible: false
      });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  Spinner = () => {
    this.setState({
      spinProfile: true
    });
  };
  SpinnerOff = () => {
    this.setState({
      spinProfile: false
    });
  };
  ItemSideClick = (dd, d) => {
    this.setState({
      Breadcrumb: d.Title + " / " + dd
    });
    if (dd.includes("data api")) {
      this.setState({
        SpinLoading: true
      });
      setTimeout(() => {
        this.setState({
          SpinLoading: false
        });
      }, 2000);
    } else {
      this.setState({
        SpinLoading: false
      });
    }
  };
  LogOutClick = () => {
    this.setState({
        visible:true
    })
  };
  render() {
    if(this.state.GotoLogin){
            return(
                <BrowserRouter>
                <Redirect to='/Login'></Redirect>
                <Route path='/Login' component={Login}></Route>
                </BrowserRouter>
            )
    }else{

    
    return (        
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh", fontWeight: "bolder" }}>
          <Sider
            overflow="scroll"
            theme="dark"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div style={{ position: "fixed", overflow: "auto" }}>
              <div className="logo" style={{ overflow: "auto" }} />
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 20,
                  fontWeight: "bold"
                }}
              >
                React JS
              </div>
              <img style={{}} src={require("./logo.svg")}></img>

              <Menu
                mode="vertical"
                theme="dark"
                defaultSelectedKeys={["1"]}
                style={{ overflow: "auto" }}
                onMouseEnter={this.Spinner}
                onClick={this.SpinnerOff}
              >
                {MenuSideBar.map((d, i) => {
                  return (
                    <SubMenu
                      onTitleMouseLeave={this.SpinnerOff}
                      style={{ overflow: "auto" }}
                      key={"sub" + (i + 1)}
                      title={
                        <span>
                          <CaretRightFilled spin={this.state.spinProfile} />
                          <span style={{}}>{d.Title}</span>
                        </span>
                      }
                    >
                      {d.Submenu.map((dd, ii) => {
                        return (
                          <Menu.Item
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              fontWeight: "bolder"
                            }}
                            onClick={() => this.ItemSideClick(dd, d)}
                            key={"item" + (ii + 1)}
                          >
                            <Link
                              style={{
                                backgroundColor: "white",
                                color: "black",
                                fontWeight: "bolder"
                              }}
                              to={`/${dd}`}
                            >
                              {dd}
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                })}
              </Menu>
            </div>
          </Sider>
          <Layout className="site-layout">
            <Header
              className=""
              style={{
                position: "fixed",
                width: "100%",
                paddingRight: "20%",
                display: "display-box",
                color: "red"
              }}
            >
              <Menu
                style={{}}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["10"]}
              >
                <SyncOutlined
                  spin
                  twoToneColor="#b2f96"
                  rotate={90}
                  style={{ fontSize: 24 }}
                />
                <Menu.Item
                  style={{ backgroundColor: "#001529" }}
                  onClick={() => {
                    this.setState({
                      Breadcrumb: "Home",
                      SpinLoading: false
                    });
                  }}
                  key="10"
                >
                  <Link to="/Lorem">Home</Link>
                </Menu.Item>

                <Menu.Item
                  style={{ backgroundColor: "#001529" }}
                  onClick={() => {
                    this.setState({
                      Breadcrumb: "About",
                      SpinLoading: false
                    });
                  }}
                  key="11"
                >
                  <Link to="/About">About</Link>
                </Menu.Item>

                <Menu.Item
                  style={{ backgroundColor: "#001529" }}
                  onClick={() => {
                    this.setState({
                      Breadcrumb: "Contact",
                      SpinLoading: false
                    });
                  }}
                  key="12"
                >
                  <Link to="/Contact">Contact</Link>
                </Menu.Item>

                <Menu.Item onClick={this.LogOutClick}
                  theme="dark"
                  style={{ float: "right", backgroundColor: "#001529" }}
                  key="14"
                >
                    <LogoutOutlined rotate={-90} style={{ fontSize: 24 }} />
                </Menu.Item>
                <Menu.Item
                  theme="dark"
                  style={{ float: "right", backgroundColor: "#001529" }}
                  key="13"
                >
                  <UserOutlined style={{ fontSize: 24 }} />
                  Hi, Welcome Guest
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: "50px 16px" }}>
              <Breadcrumb style={{ margin: "20px 0" }}>
                <Breadcrumb.Item>
                  <ReloadOutlined
                    spin={this.state.SpinLoading}
                    style={{ marginRight: 10 }}
                  />
                  {this.state.Breadcrumb}
                </Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Route path="/Youtube" component={Youtube}></Route>
                <Route path="/Lorem" component={Lorem}></Route>
                <Route path="/Description" component={Description}></Route>
                <Route path="/Project" component={Project}></Route>
                <Route path="/Gallery" component={Gallery}></Route>
                <Route path="/Show data api" component={ShowApi}></Route>
                <Route path="/Insert data api" component={InsertApi}></Route>
                <Route path="/Update data api" component={UpdateApi}></Route>
                <Route path="/Delete data api" component={DeleteApi}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Contact" component={Contact}></Route>
                <Route path="/Secret Message" component={SecretMessage}></Route>
                <Route path="/Public Message" component={PublicMessage}></Route>
                <Route path="/Private Message" component={PrivateMessage}></Route>
              </Switch>
              <Modal
                backgroundColor="blue"
                confirmLoading={false}
                cancelText="No, i want go to back"
                okText="Yes iam sure"
                okType="danger"
                style={{ fontWeight: "bolder", backgroundColor: "navy" }}
                title="Log Out Warning"
                visible={this.state.visible}
                onOk={this.HandleOnOkModal}
                onCancel={this.HandleOnCancelModal}
              >
                Are you sure to Log Out?
              </Modal>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Way Design ©2020 Created by Human
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}}
