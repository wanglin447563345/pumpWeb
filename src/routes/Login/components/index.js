import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { routerRedux } from 'dva/router';
import BaseComponent from 'components/BaseComponent';
import './style.less';
const FormItem = Form.Item;

@connect(({ login, loading }) => ({
  login,
  loading: loading.models.login,
}))
class NormalLoginForm extends BaseComponent {
    constructor (props) {
        super(props);
        this.state = {
            activeNav: ''
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
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_f">
                <Form  className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" onClick={(e)=>this.props.dispatch(routerRedux.push('/pump/user/reset'))}>忘记密码？</a>
                    </FormItem>
                    <Button  onClick={this.Login} className="login-form-button">
                        登录
                    </Button>
                </Form>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login