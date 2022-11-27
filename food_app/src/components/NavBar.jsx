import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Dropdown, Menu, PageHeader, Row, Tag, Typography, Button } from 'antd';
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
      <Button type ="text" size="large" onClick={onSignOut}> Log Out</Button>,
      <Button type ="text" size="large" onClick={toAccount}> My Account</Button>,
      <Button type ="text" size="large" onClick={toMap}> Find Restaurants</Button>,
      <Button type ="text" size="large" onClick={toHome}> Home </Button> 
    ]} 
  >
  </PageHeader>
);

export default NavBar;