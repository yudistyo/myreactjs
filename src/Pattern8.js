import { Switch, Link, Route,BrowserRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Card } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined, CaretRightFilled,
    TeamOutlined, SyncOutlined,
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
import React from 'react'
import MenuSideBar from './Sidebar/SideMenu'
import Lorem from './Lorem/Lorem'
import Youtube from './Youtube'
import Description from './Description'
import Project from './Project'
import Gallery from './Gallery'
import ShowApi from './API/Show Api'
import InsertApi from './API/Insert Api'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class SiderDemo extends React.Component {
    state = {
        collapsed: false, spinProfile: false, spinMessage: false, spinTespage: false, Breadcrumb: 'Home'

    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    Spinner = () => {
        this.setState({
            spinProfile: true
        })
    }
    SpinnerOff = () => {
        this.setState({
            spinProfile: false
        })
    }
    ItemSideClick = (dd, d) => {
        this.setState({
            Breadcrumb: d.Title + ' / ' + dd
        });
    }
    render() {
        return (
            <BrowserRouter>
            <Layout style={{ minHeight: '100vh', fontWeight: "bolder" }} >
                <Sider overflow="scroll" theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={{ position: 'fixed', overflow: 'auto' }}>
                        <div className="logo" style={{ overflow: 'auto' }} />
                        <div style={{ textAlign: 'center', color: 'white', marginTop: 20, fontWeight: 'bold' }}>React JS</div>
                        <img style={{}} src={require('./logo.svg')}></img>

                        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']} style={{ overflow: 'auto' }} onMouseEnter={this.Spinner} onClick={this.SpinnerOff}  >
                            {MenuSideBar.map((d, i) => {
                                return (
                                    <SubMenu onTitleMouseLeave={this.SpinnerOff} style={{ overflow: 'auto' }}
                                        key={'sub' + (i + 1)}
                                        title={
                                            <span>
                                                <CaretRightFilled spin={this.state.spinProfile} />
                                                <span style={{}}>{d.Title}</span>
                                            </span>}>
                                        {
                                            (d.Submenu).map((dd, ii) => {
                                                return (
                                                    <Menu.Item style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bolder' }} onClick={() => this.ItemSideClick(dd, d)} key={'item' + (ii + 1)}><Link style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bolder' }} to={`/${dd}`}>{dd}</Link></Menu.Item>
                                                )
                                            })
                                        }

                                    </SubMenu>
                                )
                            })
                            }
                        </Menu>
                    </div>
                </Sider>
                <Layout className="site-layout">
                    <Header className="" style={{ position: 'fixed', width: "100%", paddingRight: "20%", display: 'display-box', color: 'red', }}>
                        <Menu style={{}} theme="dark" mode="horizontal" defaultSelectedKeys={['10']}>

                            <Menu.Item onClick={() => {
                                this.setState({
                                    Breadcrumb: 'Home'
                                })
                            }
                            } key="10"><Link to='/Lorem'>Home</Link></Menu.Item>

                            <Menu.Item onClick={() => {
                                this.setState({
                                    Breadcrumb: 'About'
                                })
                            }
                            } key="11">About</Menu.Item>

                            <Menu.Item onClick={() => {
                                this.setState({
                                    Breadcrumb: 'Contact'
                                })
                            }
                            } key="12">Contact</Menu.Item>

                            <Menu.Item style={{ float: 'right' }} key="13"><img style={{ width: 50, height: 50 }} src={require('./logo.svg')}></img></Menu.Item>
                            <Menu.Item style={{ float: 'right' }} key="14"><SyncOutlined spin twoToneColor="#b2f96" rotate={90} style={{ fontSize: 24 }} /></Menu.Item>
                        </Menu>

                    </Header>
                    <Content style={{ margin: '50px 16px' }}>
                        <Breadcrumb style={{ margin: '20px 0' }}>
                            <Breadcrumb.Item>{this.state.Breadcrumb}</Breadcrumb.Item>
                        </Breadcrumb>                       
                        <Switch>
                            <Route path="/Youtube" component={Youtube} ></Route>
                            <Route path="/Lorem" component={Lorem} ></Route>
                            <Route path="/Description" component={Description} ></Route>
                            <Route path="/Project" component={Project} ></Route>
                            <Route path="/Gallery" component={Gallery} ></Route>
                            <Route path="/Show data api" component={ShowApi} ></Route>
                            <Route path="/Insert data api" component={InsertApi} ></Route>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Way Design ©2020 Created by Human</Footer>
                </Layout>
            </Layout>
            </BrowserRouter>
        );
    }
}


