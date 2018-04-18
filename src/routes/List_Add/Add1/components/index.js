import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import { routerRedux } from 'dva/router';
import BaseComponent from 'components/BaseComponent';
import './style.less';
const FormItem = Form.Item;

@connect((state) => ({
    add1:state.add1,
}))
class NormalAdd1Form extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeNav: ''
        }
        this.Revise=this.Revise.bind(this)
    }
    Revise (){
        const params=this.props.form.getFieldsValue()
        console.log(params)
        // this.props.dispatch({
        //     type:'login/login',
        //     payload:params
        // })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 24 },
            wrapperCol: { span: 24 },
        };
        return (
            <div className="revise_wrap">
                <p>添加控制器</p>
                <div className="login_f revise_f">
                    <Form  className="login-form" layout='vertical'>
                        <FormItem label="控制器序列号" {...formItemLayout}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input  placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem label="经销商邮箱：" {...formItemLayout}>
                            {getFieldDecorator('userEmail', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input type="email"  placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <Button className="login-form-button"
                                onClick={()=>this.props.dispatch(routerRedux.push('/pump/web/control/add2'))}
                        >
                            下一步
                        </Button>
                    </Form>
                </div>
            </div>

        );
    }
}

const Add1 = Form.create()(NormalAdd1Form);

export default Add1