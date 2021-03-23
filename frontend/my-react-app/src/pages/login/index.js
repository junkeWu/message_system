import { Form, Button, Input, Card, Checkbox, message     } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import  './style.css';

function Login(props){
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        if (values.username === 'echo' && values.password === '123456') {
            props.history.push("/admin/messages")
        } else {
            message.error("用户名或者密码错误")
        }
      };
   return (
    <Card title="网站留言系统" className="login-form">   
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </Card>
);
}
export default Login

