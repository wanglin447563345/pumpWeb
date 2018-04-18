import React from 'react';
import * as MyRouter from 'dva/router'  //需要用as重命名，不然引入Switch会和antd里引入Switch报重复声明的错误
import { connect } from 'dva';
import { Menu, Dropdown,  Icon , Layout, Switch } from 'antd';
import { routerRedux } from 'dva/router';
import Util from '../utils/utils'
import './styles/detail.less';
import Logo from 'assets/images/logo.png';
import Detail from 'assets/images/detail.png';
import Status_Icon from 'assets/images/status_icon.png';
import BaseComponent from 'components/BaseComponent';
const { Header, Content } = Layout;
@connect((state) => ({// 这个必须写  即使是空的，  不然使用this.props.dispatch报错

}))
export default class DetailLayout extends BaseComponent {
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
        const BMap=window.BMap
        let map = new BMap.Map('control_map') // 创建Map实例
        map.centerAndZoom(new BMap.Point(121.4, 31.2), 11)
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
                <div className="detail_content">
                    <div className="left" style={{minHeight:window.screen.availHeight-125}}>
                        <img src={Detail} alt=""/>
                        <div className="control">
                            <div className="control_item control_item_active">
                                A泵<br/>
                                已启动
                            </div>
                            <div className="control_item">
                                B泵<br/>
                                已停止
                            </div>
                            <div className="control_item">
                                B泵<br/>
                                已停止
                            </div>
                        </div>
                        <div className="control_btn">
                            <Switch checkedChildren="自动" unCheckedChildren="手动" defaultChecked />
                        </div>
                        <div className="control_info">
                            <h3><img src={Status_Icon} alt=""/>1号控制器</h3>
                            <p>工作电压：350V</p>
                            <p>工作电流：0.0A</p>
                            <p>地址：上海市闵行区</p>
                        </div>
                        <div id="control_map" style={{height:300}} />
                    </div>
                    <div className="right">
                        <Header>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                selectedKeys={[this.state.activeNav]}
                            >
                                <Menu.Item key="status"><MyRouter.NavLink to="status">控制器状态</MyRouter.NavLink></Menu.Item>
                                <Menu.Item key="trouble"><MyRouter.NavLink to="trouble">历史故障记录</MyRouter.NavLink></Menu.Item>
                                <Menu.Item key="run"><MyRouter.NavLink to="run">历史运行记录</MyRouter.NavLink></Menu.Item>
                                <Menu.Item key="setting"><MyRouter.NavLink to="setting">设置</MyRouter.NavLink></Menu.Item>
                                <Menu.Item key="control" style={{float:'right'}}><MyRouter.NavLink to="/pump/web/control"><Icon type="left" />返回列表</MyRouter.NavLink></Menu.Item>
                            </Menu>
                        </Header>
                        <Content>
                            <MyRouter.Switch>
                                {childRoutes}
                            </MyRouter.Switch>
                        </Content>
                    </div>
                </div>

            </Layout>
        );
    }
}