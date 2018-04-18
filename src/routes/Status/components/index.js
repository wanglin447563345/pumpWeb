import React from 'react';
import { connect } from 'dva';
import './style.less';
import BaseComponent from 'components/BaseComponent';


@connect(state=>({
    status: state.status
}))
export default class DetailStatus extends BaseComponent {
    render() {
        return (
            <div className="status-page">
                详情首页
            </div>
        )
    }
}