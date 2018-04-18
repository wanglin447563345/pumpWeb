import React from 'react';
import { connect } from 'dva';
import './style.less';
import { Table, DatePicker, Button } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Pie from 'components/ChartPie';


@connect(state=>({
    trouble: state.trouble
}))
export default class DetailTrouble extends BaseComponent {
    constructor(props){
        super(props);
        this.state={

        }
    }
    onChangeStart=(date, dateString)=> {
        console.log(date, dateString);
    }
    onChangeEnd=(date, dateString)=> {
        console.log(date, dateString);
    }

    columns = [{
        title: '序号',
        dataIndex: 'company_name',
        key: 'company_name',
    }, {
        title: '日期',
        dataIndex: 'company_type',
        key: 'company_type',
    }, {
        title: ' 故障时间',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: '故障类型',
        dataIndex: 'addr',
        key: 'addr',
    }];
    render() {
        return (
            <div className="trouble-page">
                <div className="trouble_top">
                    <div>
                        <DatePicker onChange={()=>this.onChangeStart()} /> 至 <DatePicker onChange={()=>this.onChangeEnd()} />
                        <Button type="primary" icon="search">查询</Button>
                    </div>
                    <Button  icon="upload">导出</Button>
                </div>
                <div style={{backgroundColor:'#fff', marginTop:20, paddingBottom:50}}>
                    <Table
                        bordered
                        columns={this.columns}
                    />
                    <Pie/>
                </div>

            </div>
        )
    }
}