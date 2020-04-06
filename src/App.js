import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppNew from './AppNew'
import App2 from './App2'
import App3 from './App3'
import { Button, Layout, Typography, Avatar, Menu ,Breadcrumb } from 'antd';
import { MenuItem, MenuItemGroup } from 'rc-menu';
import SubMenu from 'antd/lib/menu/SubMenu';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
//import {Typography} from 'antd/lib/layout/Sider';

const { Header, Sider, Footer, Content } = Layout;
const { Title } = Typography
function App() {
  const [Input, setInput] = useState('');
  //console.log(change())
  return (
    <div > 
      <Layout>
        <Header style={{ padding: 10 }}>         
        <Avatar style={{ float: 'right' }} icon="user"></Avatar>          
          <Title style={{ color: 'white' }} level={3}>React JS</Title>
          <img src={logo} style={{ with: 50, height: 50 , float: 'left',position:'absolute',top:0,left:100}}></img>        
        </Header>
      </Layout>
      <Layout>
        <Sider style={{ backgroundColor: 'salmon', color: 'white' }}>
          <Menu style={{ backgroundColor: 'salmon', color: 'white' }} defaultSelectedKeys={'SubMenu 1'} mode='inline'>
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title={
              <span>
                <Avatar type="mail"></Avatar>
                <span>'Dash Sub'</span>
              </span>

            }>
              <MenuItemGroup title={'Sub'}>
                <MenuItem key='SubMenu 1' > SubMenu 1 </MenuItem>
                <MenuItem key='SubMenu 2'> SubMenu 2</MenuItem>
                <MenuItem key='SubMenu 3'> SubMenu 3</MenuItem>
              </MenuItemGroup>
            </SubMenu>
            <MenuItem>Dashboard 2 </MenuItem>
            <MenuItem>Dashboard 3</MenuItem>
            <MenuItem>Dashboard 4</MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Home</BreadcrumbItem>
            </Breadcrumb>
           <div style={{backgroundColor:'white',minHeight:400}}>Content</div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
const change = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="./AppNew" component={AppNew} />
      </BrowserRouter>
    </div>
  );
}

// <div style={{}}>
// <Link to="/AppNew">AppNew</Link>
// <Link to="/App2">App2</Link>
// </div>
// <Switch>
// <Route path="/AppNew" component={AppNew}></Route>
// <Route path="/App2" component={App2}></Route>
// </Switch>