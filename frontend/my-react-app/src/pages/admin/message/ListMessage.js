import React from 'react'
import { Card,Table,Button } from "antd";
const dataSource = [
    {
        id: 1,
        name: 'echo',
        title: '王者',
        content: '晚上一起打王者',
        time:   '2021-03-19'
    },{
        id: 2,
        name: 'echo',
        title: '王者',
        content: '晚上一起打王者',
        time:   '2021-03-19'
    },{
        id: 3,
        name: 'echo',
        title: '王者',
        content: '晚上一起打王者',
        time:   '2021-03-19'
    }
]
function ListMessage(props){
    
    const columns = [{
        title: '序号',
        key:    'id',
        width:  80,
        align:  'center',
        render: (txt, record, index) => index+1
    },{
        title: '名字',
        dataIndex: 'name'
    },{
        title: '标题',
        dataIndex: 'title'
    },{
        title: '内容',
        dataIndex: 'content'
    },{
        title: '时间',
        dataIndex: 'time'
    }
]
    return (
        <Card 
        title="留言列表"
        extra={
            <Button type="primary" size="small" onClick={() => props.history.push("/admin/message/editMessage")}>
                新增
            </Button>
        }
     >
         <Table columns={columns} bordered dataSource={dataSource}></Table>
    </Card>
   );
}
export default ListMessage 