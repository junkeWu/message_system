import React from 'react'
import {Form, Card, Input, Button} from 'antd'
function EditMessage(props){
    return (
       <Card title="留言编辑">
           <Form>
               <Form.Item label="名字" >
                   <Input placeholder="请输入姓名" width= "300px"></Input>
                </Form.Item>  
                <Form.Item label="标题" >
                   <Input placeholder="请输入标题" width= "300px"></Input>
                </Form.Item>  
                <Form.Item label="内容" >
                   <Input placeholder="请输入内容 " width= "300px"></Input>
                </Form.Item>  
                <Form.Item label="时间" >
                   <Input placeholder="请输入时间" width= "300px"></Input>
                </Form.Item>  
                <Form.Item >
                    <Button type="primary">保存</Button>
                </Form.Item>   
           </Form>
       </Card>
     
    );
}
export default  EditMessage

