// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UserOutlined,
//   PushpinOutlined,
//   CarOutlined,
//   PictureOutlined,
//   DatabaseOutlined,
//   InstagramOutlined,
//   TeamOutlined,
//   QuestionOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme, Flex } from 'antd';
// import introText from './text';

// const { Header, Sider, Content } = Layout;

// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
  
//   return (
//     <Layout className='layout-whole-screen'>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {key: '1', icon: <UserOutlined />, label: 'Registration'},
//             {key: '2', icon: <PushpinOutlined />, label: 'Event Details'},
//             {key: '3', icon: <CarOutlined />, label: 'Travel Information'},
//             {key: '4', icon: <PictureOutlined />, label: 'Photo Gallery'},
//             {key: '5', icon: <DatabaseOutlined />, label: 'Schedule of Events'},
//             {key: '6', icon: <InstagramOutlined />, label: 'Social Media'},
//             {key: '7', icon: <TeamOutlined />, label: 'Contact Us'},
//             {key: '8', icon: <QuestionOutlined />, label: "FAQ's"},
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             overflowY: 'auto', // Enable vertical scrolling
//           }}
//         >
//           <h1 className='tab'> Hunter Family Reunion! </h1>
//           <div>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{introText}
//           </div>  
//           <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
//             <img
//               className="right-image"
//               src="https://www.sandals.com/blog/content/images/2019/10/2-View-from-Saint-George_s-in-Grenada.jpg"
//               alt="Grenada"
//             />
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;
