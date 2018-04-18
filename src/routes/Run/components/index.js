import React from 'react';
import { connect } from 'dva';
import './style.less';
import BaseComponent from 'components/BaseComponent';


@connect(state=>({
    run: state.run
}))
export default class DetailRun extends BaseComponent {
    render() {
        return (
            <div className="run-page">
                run
            </div>
        )
    }
}