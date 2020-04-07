import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,SyncOutlined,
    UserOutlined,LogoutOutlined
} from '@ant-design/icons';
import React from 'react'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' ,fontWeight:"bolder"}} >
                <Sider style={{}} theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={{ position: 'fixed' }}>
                        <div className="logo" />
                        <div style={{ textAlign: 'center', color: 'white', marginTop: 20, fontWeight: 'bold' }}>React JS</div>
                        <img style={{}} src={require('./logo.svg')}></img>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                            <Menu.Item key="1" >
                                <PieChartOutlined />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <DesktopOutlined />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <UserOutlined />
                                        <span>User</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <TeamOutlined spin={false}/>
                                        <span>Team</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <FileOutlined />
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout className="site-layout">
                    <Layout style={{backgroundColor:'pink',display:'inline'}}>
                        <Header className="" style={{ position: 'fixed', width: "100%",paddingRight:"20%", display: 'display-box', color: 'red', }}>
                            <Menu style={{}} theme="dark" mode="horizontal" defaultSelectedKeys={['10']}>
                                <Menu.Item key="10">Home</Menu.Item>
                                <Menu.Item key="11">About</Menu.Item>
                                <Menu.Item key="12">Contact</Menu.Item>
                               
                                <Menu.Item style={{float:'right'}} key="13"><img style={{width:50,height:50}} src={require('./logo.svg')}></img></Menu.Item>
                                <Menu.Item style={{float:'right'}} key="14"><SyncOutlined spin twoToneColor="#b2f96" rotate={90} style={{fontSize:24}}/></Menu.Item>
                            </Menu>

                        </Header>
                    </Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quia aliquam placeat fugit porro magnam assumenda voluptatibus optio culpa nam commodi, veritatis dolor quod sunt accusantium reiciendis tempora rem, qui amet eum? Reiciendis repellat inventore quasi nostrum alias corporis totam molestiae aliquid perspiciatis facere, assumenda quis esse incidunt ipsam voluptatem doloribus aut ratione, sapiente, non animi autem fugiat amet! Dolore officiis ipsum facilis neque vero non, sunt reiciendis expedita quod laboriosam explicabo qui omnis quo veritatis error eligendi natus saepe aut fuga consequuntur odio. Ratione iure qui, mollitia aspernatur eligendi soluta praesentium vel dolorum officiis, magnam fugiat consectetur. Atque doloribus nobis labore cumque qui eveniet quisquam vel necessitatibus culpa molestiae, natus odit, repudiandae accusamus similique ut placeat rerum unde alias quas delectus consequuntur? Accusamus ratione rem dolore vero odio nemo ipsum, labore, dolorum exercitationem dolor praesentium incidunt. Nobis nemo delectus at molestiae iure ducimus recusandae nesciunt, praesentium deserunt in, officia repellat deleniti molestias laborum, perspiciatis harum. Aliquam dolorem consequatur voluptate cupiditate id velit at molestias, cumque, rerum ab, dolores sunt iure reiciendis rem saepe tempora. Fugit, reiciendis eos odio harum voluptatem nemo voluptas explicabo consequuntur, vel mollitia rem vitae sunt error ex, veniam doloremque voluptate in dolorum modi temporibus assumenda placeat inventore! Amet et ipsa commodi nulla totam quas minus voluptatibus, quasi dolore animi reiciendis esse nihil ullam perferendis? Modi molestiae aut odit vel iure nihil minima ratione tenetur sequi veniam cum asperiores, repellendus nam neque dolores hic, veritatis optio necessitatibus minus deleniti omnis voluptate. Quae suscipit cupiditate debitis vero enim. Velit architecto vero iusto vel, doloribus itaque illo ab cumque minima quos at excepturi aut a consequuntur officia nulla distinctio facilis repudiandae quidem. Atque eius, numquam dolorum nulla delectus quaerat reiciendis a illo aspernatur vero quisquam, laudantium unde doloribus cumque modi impedit et, deleniti vel ab neque aperiam. Aliquam ratione doloremque tempore possimus veniam eaque, error, tenetur impedit sapiente accusantium magnam odio placeat nulla cumque optio exercitationem? Possimus non corporis architecto officiis ea temporibus vitae, sunt, nobis similique consequatur adipisci doloremque cum a quae inventore quisquam voluptates ipsa eius ad reiciendis asperiores commodi. Exercitationem saepe, blanditiis voluptatem neque, commodi corporis, itaque dolorem id porro magnam voluptatibus et sit vel! Nesciunt porro exercitationem optio facere at ducimus facilis, error quae sint hic natus! Animi vel nam et inventore doloremque voluptate facere excepturi quo tempore velit rem, labore iure aperiam aut cumque officiis debitis alias libero maiores nesciunt! Laborum ad eaque amet corporis esse et quas similique veritatis, laudantium, necessitatibus illo minima ipsum, culpa saepe vero quidem veniam repellendus. Rerum delectus, quibusdam provident voluptates soluta ipsam. Necessitatibus modi in adipisci impedit, id est. Aliquam sunt adipisci repudiandae deserunt autem, fugit nihil voluptatum nostrum corporis ullam blanditiis officia reprehenderit dicta, cum laborum obcaecati possimus impedit inventore. Maxime, obcaecati! Eum praesentium incidunt mollitia eius temporibus error amet doloribus quia ex repellendus voluptates dicta dolores beatae, explicabo voluptatem animi omnis facilis est, illum, adipisci alias ducimus magni? Ratione, tempora ipsum debitis rem a vitae consectetur quod asperiores non sint, reiciendis quos rerum deleniti voluptatibus in nihil perferendis inventore architecto. Nesciunt quo, ullam magnam quaerat adipisci quod, corrupti autem provident dolores excepturi deleniti? Quibusdam deserunt, odio commodi adipisci nostrum reprehenderit suscipit nesciunt necessitatibus voluptate aliquid. Nulla voluptas officia dignissimos ea! Sint ratione eligendi incidunt mollitia quis quod optio numquam, sed cum vero earum a id. Quas deserunt accusamus amet quasi, accusantium fugiat nisi placeat eveniet quod beatae necessitatibus vero illo voluptatum ratione laborum reprehenderit. Veniam sapiente eligendi provident, officiis laboriosam mollitia voluptate non aspernatur, dolorum laborum saepe aliquam labore ipsam expedita esse totam ipsum quis error est fugit rem alias magnam natus! Rem corrupti doloremque impedit accusamus aperiam esse. Unde alias iure neque, vel nobis amet eveniet ad tempore doloremque illum, aut cumque commodi iusto perferendis harum deleniti provident corporis eius et repellendus similique quos. Ducimus recusandae vitae sapiente vero quas nemo dicta culpa nulla quisquam temporibus rem, id corporis a autem ipsa sit ipsam enim accusantium ipsum dolore suscipit reiciendis, ab velit. Ex iste iure quod animi numquam aliquam id mollitia doloribus et, inventore excepturi consectetur exercitationem, fugit adipisci dicta praesentium sit non voluptatibus! Sint at eos dolor est animi nostrum ea inventore! Aliquam quaerat tenetur cupiditate quam laboriosam reprehenderit veniam odio nostrum dolor, quis maiores ratione nam eos unde minus dolorum doloremque iste eaque. Deleniti alias sapiente quidem? Itaque consequatur officia hic quos optio, culpa iusto delectus odit possimus quod laboriosam est nihil quisquam nisi eum pariatur iure enim nostrum fugiat expedita officiis maiores. Totam ab ullam ducimus aspernatur fuga a necessitatibus obcaecati, fugiat ea explicabo officia non debitis animi quisquam nesciunt incidunt, sapiente minus adipisci cumque, praesentium iure exercitationem? Amet nulla sapiente ab delectus nemo optio consectetur eos odit ea sed, esse harum reprehenderit adipisci sint fugiat dolores excepturi beatae facere sunt voluptate quis. Iure dolorem natus ducimus aspernatur perspiciatis fuga sint qui. Deserunt harum quisquam incidunt ex a maiores magnam, ea accusamus reprehenderit officiis eaque sequi nisi sit culpa facilis dolores quod ducimus fugiat est repellat. Ad ipsa maiores dignissimos nulla dolorem libero officiis quisquam, vero incidunt voluptate excepturi nobis sed quos ducimus. Veritatis non repudiandae pariatur repellendus odit doloribus accusantium. Asperiores voluptas pariatur, blanditiis voluptate laborum quaerat eum unde ipsam iure! Omnis voluptates autem iste cupiditate fugit distinctio placeat nesciunt illo minima sint necessitatibus eum, sed fuga sequi tenetur ipsum blanditiis hic laborum sapiente ullam, odio quam officiis? Laudantium accusantium cupiditate sequi incidunt velit, quasi veritatis excepturi soluta quam architecto fugiat repellendus laborum consequuntur cum, beatae nisi modi error est odit natus dicta? Quibusdam voluptatem, soluta itaque tempora nulla earum sequi repellendus. Aliquam optio ex ratione, repellat maxime quisquam ab minima distinctio maiores accusantium doloremque cumque harum eum ipsam cum quibusdam ullam quia nostrum nemo animi! Error unde animi beatae, numquam, deleniti voluptate doloribus rerum et, odit optio commodi iusto obcaecati sunt magni dolore? Est ab placeat nemo, non sapiente perspiciatis repellendus sit quos aperiam assumenda earum quis architecto sequi dolorem maxime. Praesentium repellendus doloremque culpa laudantium alias, eos inventore perferendis fuga recusandae, quae a, esse sapiente debitis cumque tenetur.
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

