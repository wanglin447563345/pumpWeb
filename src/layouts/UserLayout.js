import React from 'react';
import { connect } from 'dva';
import { Switch, NavLink } from 'dva/router';
import './styles/user.less';
import BaseComponent from 'components/BaseComponent';

@connect()
export default class UserLayout extends BaseComponent {
  render() {
    const {routerData} = this.props;
    const {childRoutes} = routerData;
console.log()
    return (
      <div className="user-layout">
          <div className="my_form">
              {(this.props.location.pathname.split('/')[2]==="reset")?null:<nav>
                  <NavLink to="/pump/user/login" activeClassName="active">登录</NavLink>
                  <NavLink to="/pump/user/register" activeClassName="active">注册</NavLink>
              </nav>}

              <Switch>
                  {childRoutes}
              </Switch>
          </div>
      </div>
    );
  }
}