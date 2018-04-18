import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import './style.less';
import BaseComponent from 'components/BaseComponent';
const FormItem = Form.Item;

@connect((state) => ({
    register:state.register,
}))
class NormalRegisterForm extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeNav: ''
        }
        this.Register=this.Register.bind(this)
    }
    Register (){
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
            <div className="login_f">
                <Form  className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input  placeholder="请输入用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('userEmail', {
                            rules: [{ required: true, message: 'Please input your Email!' }],
                        })(
                            <Input type="email"  placeholder="请输入用户名" />
                        )}
                    </FormItem>
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
                        注册
                    </Button>
                </Form>
            </div>
        );
    }
}

const Register = Form.create()(NormalRegisterForm);

export default Register