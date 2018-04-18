import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Modal } from 'antd';
import './style.less';
import BaseComponent from 'components/BaseComponent';
const FormItem = Form.Item;
const confirm = Modal.confirm;

@connect((state) => ({
    revise:state.revise,
}))
class NormalReviseForm extends BaseComponent  {
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
                <p>修改用户密码</p>
                <div className="login_f revise_f">
                    <Form  className="login-form" layout='vertical'>
                        <FormItem label="请输入当前密码：" {...formItemLayout}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input  placeholder="请输入用户名" type="password"/>
                            )}
                        </FormItem>
                        <FormItem label="请输入新密码：" {...formItemLayout}>
                            {getFieldDecorator('userEmail', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input type="password"  placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem label="请再次输入新密码：" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input  type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <Button className="login-form-button"
                                onClick={() => confirm({
                            title: `确定修改密码吗`,
                            onOk:()=> {
                                this.Revise()
                            },
                            onCancel() {},
                        })}
                        >
                            修改
                        </Button>
                    </Form>
                </div>
            </div>

        );
    }
}

const Revise = Form.create()(NormalReviseForm);

export default Revise