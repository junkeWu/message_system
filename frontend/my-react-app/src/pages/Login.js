import { Card,Table,Button } from "antd";
import React from 'react'

function Login(){
   return (
    <Card 
        title="留言页面"
        exact={
            <Button type="primary" size="small">
                新增
            </Button>
        }
     >
         <Table></Table>
    </Card>
   );
    // <div>
    //     <p><a href="/">给我留言</a></p>
    // <table border="1">
    //     <tr>
    //         <th>编号</th><th>姓名</th><th>标题</th><th>内容</th><th>时间</th>
    //     </tr>
    //     <tr>
    //         <td>1</td>echo<td>title</td>内容<td>2021-3-21</td>
    //     </tr>
    //     <tr>
    //         <td>2</td>echo<td>title</td>内容<td>2021-3-21</td>
    //     </tr>
    //     <tr>
    //         <td>3</td>echo<td>title</td>内容<td>2021-3-21</td>
    //     </tr>
    // </table>
    // </div>
//    )
}
export default Login