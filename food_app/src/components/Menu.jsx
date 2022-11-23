import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React from 'react';

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
      <Button key="2"> Find Restaurants</Button>,
      <Button key="1" type="primary">
        Home
      </Button>,
    ]}
  >
  </PageHeader>
);
export default MenuComponent;
