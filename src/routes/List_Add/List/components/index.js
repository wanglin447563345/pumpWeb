import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Input, Button, Table, Modal } from 'antd';
import './style.less'
import BaseComponent from 'components/BaseComponent';
import List_List_Icon from 'assets/images/list_icon6.png'
import List_Item_Icon from 'assets/images/list_item_icon.png'
import List_Item from 'assets/images/list_item.png'
import Status_Icon from 'assets/images/status_icon.png'
import Status_Icon1 from 'assets/images/status_icon1.png'

@connect((state) => ({
    list:state.list,
}))
export default class List extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            display: true,
            addModalVisible: false
        };
        this.changeDisplay=this.changeDisplay.bind(this);
        this.showModal=this.showModal.bind(this);
        this.hideModal=this.hideModal.bind(this);
    }
    componentDidMount() {

    }
    // 切换列表展示
    changeDisplay(i){
        this.setState({display:i})
    }
    //显示模态框
    showModal(){
        this.setState({
            addModalVisible: true,
        });
    }
    //取消模态框
    hideModal(){
        this.setState({
            addModalVisible: false,
        });
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
            <div className="list_page">
                <div className="list_search">
                    <div className="list_search_left">
                        <span onClick={()=>this.changeDisplay(true)}><img src={List_Item_Icon} alt=""/></span>
                        <span onClick={()=>this.changeDisplay(false)}><img src={List_List_Icon} alt=""/></span>
                        <Input placeholder="请输入名称" />
                        <Input placeholder="请输入地区" />
                        <Input placeholder="请输入用户邮箱" />
                        <Button shape="circle" icon="search" />
                    </div>
                    <div className="list_search_right">
                        <Button icon="plus-circle-o" onClick={this.showModal}>添加分组</Button>
                        <Modal
                            title="添加分组"
                            visible={this.state.addModalVisible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="添加"
                            cancelText="取消"
                        >
                            <p style={{display:'flex'}}><label htmlFor="" style={{width:55, lineHeight:2}}>名称：</label><Input placeholder="请输入组名" /></p>
                        </Modal>
                    </div>
                </div>
                {this.state.display?  <div className="list_items">
                    <div className="list_item_group_wrap">
                        <div className="list_item_group">
                            <h3>一  组</h3>
                            <p>（2/25）</p>
                            <span>2</span>
                        </div>
                    </div>
                    <div className="list_item_wrap">
                        <div className="list_item" onClick={()=>{this.props.dispatch(routerRedux.push('/pump/detail/status'))}}>
                            <img src={List_Item} alt=""/>
                            <div className="active">
                                <h3><img src={Status_Icon} alt=""/>1号控制器</h3>
                                <p>工作电压：350V</p>
                                <p>工作电流：0.0A</p>
                                <p>地址：上海市闵行区</p>
                            </div>
                            <div className="list_btns">
                                <span>编辑</span> | <span>删除</span> | <span>属性</span> | <span>移动</span>
                            </div>
                        </div>
                    </div>
                    <div className="list_item_wrap">
                        <div className="list_item" onClick={()=>{this.props.dispatch(routerRedux.push('/detail/status'))}}>
                            <img src={List_Item} alt=""/>
                            <div>
                                <h3><img src={Status_Icon1} alt=""/>1号控制器</h3>
                                <p>工作电压：350V</p>
                                <p>工作电流：0.0A</p>
                                <p>地址：上海市闵行区</p>
                            </div>
                            <div className="list_btns">
                                <span>编辑</span> | <span>删除</span> | <span>属性</span> | <span>移动</span>
                            </div>
                        </div>
                    </div>
                    <div className="list_item_wrap">
                        <div className="list_item" onClick={()=>{this.props.dispatch(routerRedux.push('/detail/status'))}}>
                            <img src={List_Item} alt=""/>
                            <div className="active">
                                <h3><img src={Status_Icon} alt=""/>1号控制器</h3>
                                <p>工作电压：350V</p>
                                <p>工作电流：0.0A</p>
                                <p>地址：上海市闵行区</p>
                            </div>
                            <div className="list_btns">
                                <span>编辑</span> | <span>删除</span> | <span>属性</span> | <span>移动</span>
                            </div>
                        </div>
                    </div>
                    <div className="list_item_wrap">
                        <div className="list_item" onClick={()=>{this.props.dispatch(routerRedux.push('/detail/status'))}}>
                            <img src={List_Item} alt=""/>
                            <div>
                                <h3><img src={Status_Icon1} alt=""/>1号控制器</h3>
                                <p>工作电压：350V</p>
                                <p>工作电流：0.0A</p>
                                <p>地址：上海市闵行区</p>
                            </div>
                            <div className="list_btns">
                                <span>编辑</span> | <span>删除</span> | <span>属性</span> | <span>移动</span>
                            </div>
                        </div>
                    </div>
                    <div className="list_item_wrap">
                        <div className="list_item" onClick={()=>{this.props.dispatch(routerRedux.push('/detail/status'))}}>
                            <img src={List_Item} alt=""/>
                            <div>
                                <h3><img src={Status_Icon1} alt=""/>1号控制器</h3>
                                <p>工作电压：350V</p>
                                <p>工作电流：0.0A</p>
                                <p>地址：上海市闵行区</p>
                            </div>
                            <div className="list_btns">
                                <span>编辑</span> | <span>删除</span> | <span>属性</span> | <span>移动</span>
                            </div>
                        </div>
                    </div>
                </div> :  <div className="list_list">
                    <div className="list_list_group">
                        <p>一组（2/25）</p>
                        <p>一组（2/25）</p>
                        <p>一组（2/25）</p>
                    </div>
                    <div className="list_list_table">
                        <Table
                            bordered

                            columns={this.columns}
                        />
                    </div>
                </div>}
            </div>
        )
    }
}