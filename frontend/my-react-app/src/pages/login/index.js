import React, {Component} from "react";
import Icon from '@ant-design/icons';
import {Button, Input, Layout,} from "antd";
// import {Helmet} from "react-helmet";

import styles from './style.css'
import Title from "antd/es/typography/Title";
import '../../assets/login.gif'

const Sider = Layout.Sider;
const Footer = Layout.Footer;

export default class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            sendLoading: false,
            time: '',
            loading: false,
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this._login();
        }
    };

    handleKeyDown(e) {
        console.log("keyCode", e.keyCode);
        if (e.keyCode === 13) {
            this._login();
        }
    }

    _login() {
        if (!this.state.username || !this.state.password) {
            window.$message.error("请输入用户名和密码");
            return
        }

        this.setState({loading: true});
        window.$message.loading("登录中");

        window.$http.postForm('/login',
            {
                username: this.state.username,
                password: this.state.password,
            }).then(res => {
            window.$message.destroy();
            this.setState({loading: false});

            if (res.status === 10000) {
                window.$message.success("登录成功");
                this.props.history.push('/home');
            } else {
                window.$message.error(res.message);
            }
        }).catch(err => {
            this.setState({loading: false});
            window.$message.destroy();
            window.$message.error("通讯失败，请重试。");
        })

    }


    render() {
        return <div className={styles.container} style={{height: '100%'}}>
                <title>登录</title>
                <meta name="description" content={'登录'}/>

            <Layout style={{height: '100%'}}>
                <Layout>
                    <div style={{
                        background: '#262626',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div style={{position: 'relative', top: '15%'}} align={'center'}>
                            <img draggable={"false"} style={{userSelect: "none", pointerEvents: "none"}}
                                 src={require('../../assets/login.gif')} alt={'login.gif'}/>
                        </div>
                    </div>
                </Layout>
                <Sider width={300} style={{background: '#eeeeee', justifyContent: "center", textAlign: "center"}}>
                    <Title style={{position: 'relative', top: '25%'}} level={3}>创想留言平台-登录</Title>
                    <div style={{position: 'relative', top: '30%'}}>
                        <div className={'loginBox'} style={{margin: '0 auto'}}>
                            <Input
                                className={'margin-tb'}
                                value={this.state.username}
                                onChange={e => this.setState({username: e.target.value})}
                                prefix={<Icon type={'user'} style={{color: 'rgba(0,0,0,25)'}}/>}
                                placeholder={'用户名'}
                            />
                            <Input.Password
                                className={'margin-tb'}
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                prefix={<Icon type={'key'} style={{color: 'rgba(0,0,0,25)'}}/>}
                                placeholder={'密码'}
                            />
                            <Button
                                className={'button button-login margin-tb'}
                                type={"primary"}
                                // onKeyPress={this.handleKeyDown.bind(this)}
                                onClick={() => this._login()}> 登录 </Button>
                            <Button
                                onClick={() => this.props.history.push('/register')}
                                className={'button margin-tb'}> 注册 </Button>
                        </div>
                        <Footer style={{background: '#EEEEEE'}}>
                             © 2021 - 2022
                        </Footer>
                    </div>
                </Sider>
            </Layout>
        </div>
    }
}
// import { Card,Table,Button } from "antd";
// import React from 'react'

// function Login(){
//    return (
//     <Card 
//         title="留言页面"
//         exact={
//             <Button type="primary" size="small">
//                 新增
//             </Button>
//         }
//      >
//          <Table></Table>
//     </Card>
//    );
//     // <div>
//     //     <p><a href="/">给我留言</a></p>
//     // <table border="1">
//     //     <tr>
//     //         <th>编号</th><th>姓名</th><th>标题</th><th>内容</th><th>时间</th>
//     //     </tr>
//     //     <tr>
//     //         <td>1</td>echo<td>title</td>内容<td>2021-3-21</td>
//     //     </tr>
//     //     <tr>
//     //         <td>2</td>echo<td>title</td>内容<td>2021-3-21</td>
//     //     </tr>
//     //     <tr>
//     //         <td>3</td>echo<td>title</td>内容<td>2021-3-21</td>
//     //     </tr>
//     // </table>
//     // </div>
// //    )
// }
// export default Login