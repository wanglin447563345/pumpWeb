import React from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Button } from 'antd';
import './style.less';
import BaseComponent from 'components/BaseComponent';
import MAP_ICON from 'assets/images/home_map_icon.png'
import POSITION_ICON from 'assets/images/home_posi_icon.png'
const FormItem = Form.Item;

@connect((state) => ({
    add2:state.add2,
}))
class NormalAdd2Form extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {

        }
        this.Login=this.Login.bind(this)
    }
    Login (){
        const params=this.props.form.getFieldsValue()
        this.props.dispatch({
            type:'login/login',
            payload:params
        })
    }
    componentDidMount(){
        const BMap=window.BMap;
        let map = new BMap.Map('add2_map') // 创建Map实例
        map.centerAndZoom(new BMap.Point(121.4, 31.2), 11)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="add2_page">
                <Row gutter={45}>
                <Form layout="inline"  className="add2_form">
                    <Col className="gutter-row" span={8}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入控制器名称' }],
                        })(
                            <Input  placeholder="请输入控制器名称" />
                        )}
                    </FormItem>
                    </Col>
                    <Col className="gutter-row" span={12}>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入控制器地址' }],
                        })(
                            <Input  placeholder="请输入控制器地址" />
                        )}
                    </FormItem>
                    </Col>
                    <Col className="gutter-row" span={4}>
                    <Button  onClick={this.Login} className="login-form-button">
                        确定
                    </Button>
                    </Col>
                </Form>
                </Row>
                <Row>
                <div className="add2_bottom">
                    <div id="add2_map" style={{height:window.screen.availHeight-412}}/>
                    <div className="add2_b_b">
                        <p><img src={MAP_ICON} alt=""/></p>
                        <p><img src={POSITION_ICON} alt=""/>控制器</p>
                    </div>
                </div>
                </Row>
            </div>
        );
    }
}

const Add2 = Form.create()(NormalAdd2Form);

export default Add2