import React from 'react';
import { connect } from 'dva';
import './style.less';
import BaseComponent from 'components/BaseComponent';


@connect(state=>({
    setting: state.setting
}))
export default class DetailSetting extends BaseComponent {
    render() {
        return (
            <div className="setting-page">
                setting
            </div>
        )
    }
}