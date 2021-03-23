import React from 'react'
// import {Form, Card, Input, Button} from 'antd'
import { Form, Input, Button,DatePicker, message } from 'antd';
import { post } from '../../../request/request';
function EditMessage(props){
    const onFinish = (values: any) => {
          console.log('Success:', values);
          // TODO
          post("api/v1/admin/message",values).then(res=>{
          props.history.push("/admin/messages")
          console.log(res)
          })
        };
      
    const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
          message.error("请输入正确的内容")
        };
    const layout = {
        labelCol: { span: 28 },
        wrapperCol: { span: 6 },
      };
      const tailLayout = {
        wrapperCol: { offset: 3, span: 20 },
      };

    return (
   
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="标题"
        name="title"
        rules={[
            { required: true, message: 'Please input your title!' },
            { max: 12, message: 'Please input correct title length!'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: 'Please input your content!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="时间"
        name="create_time"
        rules={[{ required: true, message: 'Please input time!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     
    );
};
export default  EditMessage