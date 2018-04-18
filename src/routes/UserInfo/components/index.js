import React from 'react';
import { connect } from 'dva';
import BaseComponent from 'components/BaseComponent';

@connect((state) => ({
    userInfo:state.userInfo,
}))
export default class UserInfo extends BaseComponent {
    constructor(props){
        super(props);
        this.state={

        }
    }
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="userinfo-page">
        <h1>用户信息页</h1>
      </div>
    )
  }
}