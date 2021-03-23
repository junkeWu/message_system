import React from 'react'
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logo.png'
import {adminRouter} from '../../routes'

const routes = adminRouter.filter(route=>route.isShow)
const { Header, Content, Sider } = Layout;
function index(props) {

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <img src={logo} alt="logo">
              </img>
              
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
             {routes.map(route=>{
                 return (
                    <Menu.Item 
                    key={route.path} onClick={p => props.history.push(p.key)} >
                    { React.createElement(require('@ant-design/icons')[route.icon])} 
                    {route.title}
                    </Menu.Item>                     
                 )
             })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default withRouter(index)
