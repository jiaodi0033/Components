import React from 'react'
import {Button,Tooltip,Menu,Dropdown,Layout} from "antd";
import { SearchOutlined } from '@ant-design/icons'
import MyInput from "./input";
import DaoH from "./components/nav";

function handleMenuClick(e) {
    console.log('click', e);
}
const {Header,Sider,Content,Footer}=Layout;
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

class Test extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" >网站名（LOGO）</div>
                    <DaoH/>
                </Header>
                <Content  className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="container site-layout-background">
                        <MyInput/>
                        <Button type="primary" block  >Primary Button</Button>


                        <Tooltip title="search">
                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>

                        <Button type="primary" icon={<SearchOutlined />}>
                            Search
                        </Button>

                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>bottomCenter</Button>
                        </Dropdown>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
            </Layout>

        )
    }
}

export default Test;