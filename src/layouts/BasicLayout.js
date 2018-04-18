import React from 'react';
import { Switch, NavLink } from 'dva/router';
import { connect } from 'dva';
import { Menu, Dropdown,  Icon , Layout} from 'antd';
import { routerRedux } from 'dva/router';
import Util from '../utils/utils'
import './styles/basic.less';
import Logo from 'assets/images/logo.png';
import BaseComponent from 'components/BaseComponent';
const { Header, Content } = Layout;
@connect((state) => ({// 这个必须写  即使是空的，  不然使用this.props.dispatch报错

}))
export default class BasicLayout extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeNav: ''
        }
        this.LogOut=this.LogOut.bind(this)
    }
    LogOut(){
        this.props.dispatch(routerRedux.push('/pump/user/login'))
        Util.setCookie('user_info', '', -1);
    }
    componentDidMount() {
        let pathName = this.props.location.pathname.replace(/^\//, '');
        let pathNameArr = pathName.split('/');
        this.setState({
            activeNav:pathNameArr[2]
        })
    }
    componentWillUpdate(nextProps){
        if(this.props.location.pathname!==nextProps.location.pathname){
            let pathName = nextProps.location.pathname.replace(/^\//, '');
            let pathNameArr = pathName.split('/');
            this.setState({
                activeNav:pathNameArr[2]
            })
        }}

    render() {
        const { routerData } = this.props;
        const { childRoutes } = routerData;
        const helpMenu = (
            <Menu>
                {/*<Menu.Item>*/}
                    {/*<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item>*/}
                    {/*<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item>*/}
                    {/*<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>*/}
                {/*</Menu.Item>*/}
            </Menu>
        );
        const userMenu = (
            <Menu>
                <Menu.Item key="editPassword">
                    <a onClick={()=>{this.props.dispatch(routerRedux.push('/pump/web/revise'))}}>修改密码</a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a onClick={this.LogOut}>退出</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout>
                <div className="top">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="help_center">
                        <Dropdown overlay={userMenu}>
                            <a className="ant-dropdown-link" href="">
                                用户[ {JSON.parse(Util.getCookie('user_info')).name} ] <Icon type="down" />
                            </a>
                        </Dropdown>
                        <Dropdown overlay={helpMenu}>
                            <a className="ant-dropdown-link" href="">
                                帮助 <Icon type="down" />
                            </a>
                        </Dropdown>
                        <p>
                            <a href="">中文</a> | <a href="">英文</a>
                        </p>
                    </div>
                </div>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[this.state.activeNav]}
                    >
                        <Menu.Item key="home"><NavLink to="/pump/web/home">控制器总览</NavLink></Menu.Item>
                        <Menu.Item key="control"><NavLink to="/pump/web/control">控制器列表</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Switch>
                        {childRoutes}
                    </Switch>
                </Content>
            </Layout>
        );
    }
}