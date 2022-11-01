import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React from 'react';


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

const onSignOut = () => {
    navigate('/signin')
};

const MenuComponent = () => (
  <PageHeader
    title="Cravings"
    className="site-page-header"
    extra={[
      <div>
          <Button key="6" className='b1'>Saved Post
      
            <style>{`
              .b1 {
                padding-left: 100px;
                padding-right: 100px;
                padding-top: 100px;
                padding-bottom: 100px;
                background-color: #FFFFFF;
                position: fixed;
                bottom: 100px;
                right: 270px;
              }
          `}</style>

            </Button>
      </div>,
      <div>
        <Popover placement='top'> 
        <PopoverTrigger>
        
      <Button key="5" className='b2'>Log Meal
      

      <style>{`
              .b2 {
                padding-left: 100px;
                padding-right: 100px;
                padding-top: 100px;
                padding-bottom: 100px;
                background-color: #FFFFFF;
                position: fixed;
                top: 275px;
                right: 275px;
              }
          `}</style>

        </Button>
        </PopoverTrigger>
        <PopoverContent>
        <PopoverHeader fontWeight='semibold'>Enter Meal</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
          <Box>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input placeholder="username" />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <FormLabel>Restaurant</FormLabel>
            <Input placeholder="restaurant" />
            <FormLabel>Meal</FormLabel>
            <Input placeholder="meal" />
            <FormLabel>Price</FormLabel>
            <Input placeholder="price" />
            <FormLabel>Rating</FormLabel>
            <Input placeholder="rating" />
            <FormLabel>Review</FormLabel>
            <Input placeholder="review" />
            
          </FormControl>
          </Box>
          </PopoverBody>
        </PopoverContent>
        </Popover>
  </div>,
      <div>
      <Button key="4" className='b3' onClick={onSignOut}>Log Out


      <style>{`
              .b3 {
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                background-color: #FFFFFF;
                position: fixed;
                top: 20px;
                right: 30px;
              }
          `}</style>

        </Button>
  </div>,
      <Button key="3">My Account</Button>,
      <Button key="2">Find Restaurants</Button>,
      <Button key="1" type="primary">
        Home
      </Button>
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