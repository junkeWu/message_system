import React, {useEffect,useState} from 'react'
import { Card,Table,Button } from "antd";
import { get} from '../../../request/request'
// const dataSource = [
//     {
//         id: 1,
//         name: 'echo',
//         title: '王者王者王者王者王者王者王者王者王者王者',
//         content: '晚上一起打王者晚上一起打王者晚上一起打王者晚上一起打王者晚上一起打王者晚上一起打王者晚上一起打王者',
//         time:   '2021-03-19'
//     },{
//         id: 2,
//         name: 'echo',
//         title: '王者',
//         content: '晚上一起打王者',
//         time:   '2021-03-19'
//     },{
//         id: 3,
//         name: 'echo',
//         title: '王者',
//         content: '晚上一起打王者',
//         time:   '2021-03-19'
//     }
    
// ]
function ListMessage(props){

    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
          get("api/v1/admin/messages",{
            page: 1,
            pageSize: 5
          }).then(res=>{
            console.log(res)
            setDataSource(res.data.lists)
            setTotal(res.data.totalCount)
          })
        
    }, [])
    const loadData = page => {
        console.log(page)
        get("api/v1/admin/messages",
        {
            page: page,
            pageSize: 5
        })
        .then(res=>{
            console.log(res)
            setDataSource(res.data.lists)
            setTotal(res.data.totalCount)
          })
    }
    const columns = [{
        title: '序号',
        key:    'id',
        width:  80,
        align:  'center',
        // render: (txt, record, index) => index+1
        dataIndex: 'id'
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
        dataIndex: 'create_time'
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
         <Table rowkey="id" 
         pagination={{total, defaultPageSize:5, onChange:loadData}}
         columns={columns} 
         bordered 
         dataSource={dataSource}></Table>
    </Card>
   );
}
export default ListMessage 