//HomePage.jsx
import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  PushpinOutlined,
  CarOutlined,
  PictureOutlined,
  DatabaseOutlined,
  InstagramOutlined,
  TeamOutlined,
  QuestionOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import introText from './text';

 
const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout className='layout-whole-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {key: '1', icon: <HomeOutlined />, label: 'Home Page'},
            {key: '2', icon: <UserOutlined />, label: 'Registration'},
            {key: '3', icon: <PushpinOutlined />, label: 'Event Details'},
            {key: '4', icon: <CarOutlined />, label: 'Travel Information'},
            {key: '5', icon: <PictureOutlined />, label: 'Photo Gallery'},
            {key: '6', icon: <DatabaseOutlined />, label: 'Schedule of Events'},
            {key: '7', icon: <InstagramOutlined />, label: 'Social Media'},
            {key: '8', icon: <TeamOutlined />, label: 'Contact Us'},
            {key: '9', icon: <QuestionOutlined />, label: "FAQ's"},
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: 'auto', // Enable vertical scrolling
          }}
        >
          <h1 style={{textAlign: 'center'}}> Hunter Family Reunion! </h1>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{introText}
          </div>  
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img
              style={{ marginTop: '20px' }} 
              className="right-image"
              src="https://www.sandals.com/blog/content/images/2019/10/2-View-from-Saint-George_s-in-Grenada.jpg"
              alt="Grenada"
            />

          </div>
          <div style={{display: 'flex',  justifyContent: 'center'}}>
            <img
              style={{ marginTop: '20px' }}
              className="right-image"
              src="https://www.travelweek.ca/wp-content/uploads/2024/01/Belmond-Estate.jpg"
              alt="Grenada"
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;