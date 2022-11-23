import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React, {useState} from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import { Input} from 'antd';

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

const toMap = () => {
  navigate('/map')
  console.log("clicked")
};

const onSignOut = () => {
    navigate('/signin')
};

const toAccount = () => {
  navigate('/profile')
}

const toHome = () => {
  navigate('/home');
}
 const NavBar = (e) => (
  // const [heading, setHeading] = useState("");
  <PageHeader
    title={e.name}
    className="site-page-header"
    extra={[
      <Button key="4" onClick={onSignOut}> Log Out</Button>,
      <Button key="3" onClick={toAccount}> My Account</Button>,
      <Button key="2" onClick={toMap}> Find Restaurants</Button>,
      <Button key="1" type="primary" onClick={toHome}> Home </Button> 
    ]} 
  >
  </PageHeader>
);

export default NavBar;