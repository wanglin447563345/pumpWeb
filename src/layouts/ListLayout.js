import React from 'react';
import { Switch, NavLink } from 'dva/router';
import { Menu } from 'antd';
import './styles/list.less'
import LIST_ICON1 from 'assets/images/list_icon1.png'
import LIST_ICON3 from 'assets/images/list_icon3.png'
import BaseComponent from 'components/BaseComponent';

export default class Control extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeSubNav: ''
        }
    }
    componentDidMount() {
        let pathName = this.props.location.pathname.replace(/^\//, '');
        let pathNameArr = pathName.split('/');
        if(pathNameArr[2]==='add1'||pathNameArr[2]==='add2'){
            this.setState({
                activeSubNav:pathNameArr[3].substring(3,pathNameArr[3].Length - 1)
            })
        }else {
            this.setState({
                activeSubNav:pathNameArr[3]
            })
        }
    }
    componentWillUpdate(nextProps){
        if(this.props.location.pathname!==nextProps.location.pathname){
            let pathName = nextProps.location.pathname.replace(/^\//, '');
            let pathNameArr = pathName.split('/');
            if(pathNameArr[3]==='add1'||pathNameArr[3]==='add2'){//点击下一步添加按钮保持高亮
                this.setState({
                    activeSubNav:pathNameArr[3].substring(3,pathNameArr[2].Length - 1)
                })
            }else {
                this.setState({
                    activeSubNav:pathNameArr[3]
                })
            }
        }}
    render() {
        const { routerData } = this.props;
        const { childRoutes } = routerData;
        return (
            <div className="list_layout">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[this.state.activeSubNav]}>
                    <Menu.Item key="list"><NavLink to="list"><img src={LIST_ICON1} alt=""/>所有控制器</NavLink></Menu.Item>
                    <Menu.Item key="add"><NavLink to="add1"><img src={LIST_ICON3} alt=""/>添加控制器</NavLink></Menu.Item>
                </Menu>
                <Switch>
                    {childRoutes}
                </Switch>
            </div>
        )
    }
}