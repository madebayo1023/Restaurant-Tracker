import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React from 'react';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            4th menu item
          </a>
        ),
      },
    ]}
  />
);

const onSignOut = () => {
    navigate('/signin')
};

const profilePage = () => {
  navigate('/profilePage')
}

const MenuComponent = () => (
  <PageHeader
    title="Cravings"
    className="site-page-header"
    extra={[
      <Button key="4" onClick={onSignOut}>Log Out</Button>,
      <Button key="3" onClick = {profilePage}>My Account</Button>,
      <Button key="2">Find Restaurants</Button>,
      <Button key="1" type="primary">
        Home
      </Button>,
    ]}
  >
  </PageHeader>
);
export default MenuComponent;

// import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import React from 'react';
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Home', 'sub1', <HomeOutlined />),
//   getItem('Find Restaurants', 'sub2', <AppstoreOutlined />),
//   getItem('My Account', 'sub4', <UserOutlined />),
// ];
// const MenuComponent = () => {
//   const onClick = (e) => {
//     console.log('click ', e);
//   };
//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 256,
//       }}
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       items={items}
//     />
//   );
// };
// export default MenuComponent;