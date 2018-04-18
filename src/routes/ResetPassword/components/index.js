import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import './style.less';
import BaseComponent from 'components/BaseComponent';
const FormItem = Form.Item;

@connect((state) => ({
    reset:state.reset,
}))
class NormalResetForm extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeNav: ''
        }
        this.Reset=this.Reset.bind(this)
    }
    Reset (){
        const params=this.props.form.getFieldsValue()
        console.log(params)
        // this.props.dispatch({
        //     type:'login/login',
        //     payload:params
        // })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_f reset_f">
                <p>忘记密码</p>
                <Form  className="login-form">
                    <FormItem>
                        {getFieldDecorator('userEmail', {
                            rules: [{ required: true, message: 'Please input your Email!' }],
                        })(
                            <Input type="email"  placeholder="请输入邮箱" />
                        )}
                    </FormItem>
                    <div className="code">
                        <div className="code_input">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input  placeholder="请输入验证码" />
                                )}
                            </FormItem>
                        </div>
                        <Button   className="code_btn">
                            获取验证码
                        </Button>
                    </div>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input  type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('confirm', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input  type="password" placeholder="请再输入一次密码" />
                        )}
                    </FormItem>
                    <Button  onClick={this.Register} className="login-form-button">
                        重置
                    </Button>
                </Form>
            </div>
        );
    }
}

const ResetPassword = Form.create()(NormalResetForm);

export default ResetPassword