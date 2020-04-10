import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
//import App2 from './App2'
//import AppNew from './AppNew'
import Youtube from './Youtube'
import Description from './Description'
import Project from './Project'
import Gallery from './Gallery'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Dashboard(){
return(
  <BrowserRouter>
  <Layout>
    <Header className="header" style={{}}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider  width={200} className="site-layout-background" style={{}}>
        <Menu theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
        <Menu theme="dark">
        <div style={{textAlign:'center', color:'white',marginTop:20,fontWeight:'bold'}}>React JS</div>
            <img style={{}} alt='Logo' src={require('./logo.svg')}></img>            
        </Menu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
               Profile
              </span>
            }
          >
          <Menu.Item key="1"><Link to='/Description'>Description</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/Youtube'>Youtube</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/Gallery'>Gallery</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/Project'>Project</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
               Message
              </span>
            }
          >
            <Menu.Item key="5">Secret Message</Menu.Item>
            <Menu.Item key="6">Public Message</Menu.Item>
            <Menu.Item key="7">Private Message</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                < braces/>
               Test Page Area
              </span>
            }
          >
            <Menu.Item key="8">Show data API</Menu.Item>
            <Menu.Item key="9">Insert data API</Menu.Item>
            <Menu.Item key="10">Update data API</Menu.Item>
            <Menu.Item key="11">Delete data API</Menu.Item>
          </SubMenu>
         
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          
          <Switch>
          <Route path="/Gallery" component={Gallery}></Route>
          <Route path="/Project" component={Project}></Route>
          <Route path="/Youtube" component={Youtube}></Route>
          <Route path="/Description" component={Description}></Route>
        </Switch>
        </Content>
      </Layout>
    </Layout>
        
  </Layout>
  </BrowserRouter>
)
};

export default Dashboard;