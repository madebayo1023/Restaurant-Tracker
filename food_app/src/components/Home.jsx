import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
import React, {useState} from 'react'
import { ref, set } from "firebase/database";
import { auth, db } from "../base.js";
import { getAuth } from "firebase/auth";


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


// const toMap = () => {
//   navigate('/map')
//   console.log("clicked")
// };

// const onSignOut = () => {
//     navigate('/signin')
// };

// const toProfile = () => {
//   navigate('/profile')
// }
const handleSubmit = (event) => {
  console.log("here");
  event.preventDefault();
  console.log(event.target.value)
}
const FillForm = (props) => {
  const [id, setID] = useState(0);
  const [rest, setRest] = useState("");
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const onRestChange = (event) => setRest(event.target.value);
  const onMealChange = (event) => setMeal(event.target.value);
  const onPriceChange = (event) => setPrice(event.target.value);
  const onRatingChange = (event) => setRating(event.target.value);
  const onReviewChange = (event) => setReview(event.target.value);
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.email);
  const onSubmit = (e) => {
    e.preventDefault();
    setID(id + 1);
    function onCreate() {
      set(ref(db, "loggedPosts/" + user.uid + "/"+ id), {
        // id: id,
        resturant: rest,
        meal: meal,
        price: price,
        rate: rating,
        rev: review,
      });
    
    }
    onCreate();

    console.log(id);
    console.log(rest);
    
    setRest("");
    setMeal("");
    setPrice("");
    setRating("");
    setReview("");
  };
  
  return (
  <PageHeader
    extra={[
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
          {/* <Button onClick={onSubmit}>Submit</Button> */}
        <PopoverHeader fontWeight='semibold' onChange={onSubmit}>Enter Meal</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
          <Box>
          <FormControl>
            {/* <FormLabel>Username</FormLabel>
            <Input placeholder="username" />
            <FormHelperText>We'll never share your email.</FormHelperText> */}
            <Button onClick={onSubmit}>Submit</Button>  
            <FormLabel>Restaurant</FormLabel>
            <Input placeholder="restaurant" onChange={onRestChange}/>
            <FormLabel>Meal</FormLabel>
            <Input placeholder="meal" onChange={onMealChange}/>
            <FormLabel>Price</FormLabel>
            <Input placeholder="price" onChange={onPriceChange}/>
            <FormLabel>Rating</FormLabel>
            <Input placeholder="rating" onChange={onRatingChange}/>
            <FormLabel>Review</FormLabel>
            <Input placeholder="review" onChange={onReviewChange}/>
            {/* <Button key="8" onClick = {handleSubmit}>Submit</Button> */}
          </FormControl>
          </Box>
          </PopoverBody>
        </PopoverContent>
        </Popover>
  </div>
    ]}
  >
  </PageHeader>
  )

}
// const MenuComponent = () => (
  

//   <PageHeader
//     title="Cravings"
//     className="site-page-header"
//     extra={[
//       <div>
//           <Button key="6" className='b1'>Saved Post
      
//             <style>{`
//               .b1 {
//                 padding-left: 100px;
//                 padding-right: 100px;
//                 padding-top: 100px;
//                 padding-bottom: 100px;
//                 background-color: #FFFFFF;
//                 position: fixed;
//                 bottom: 100px;
//                 right: 270px;
//               }
//           `}</style>

//             </Button>
//       </div>,
//       <div>
//         <Popover placement='top'> 
//         <PopoverTrigger>
        
//       <Button key="5" className='b2'>Log Meal
      

//       <style>{`
//               .b2 {
//                 padding-left: 100px;
//                 padding-right: 100px;
//                 padding-top: 100px;
//                 padding-bottom: 100px;
//                 background-color: #FFFFFF;
//                 position: fixed;
//                 top: 275px;
//                 right: 275px;
//               }
//           `}</style>

//         </Button>
//         </PopoverTrigger>
//         <PopoverContent>
//         <PopoverHeader fontWeight='semibold'>Enter Meal</PopoverHeader>
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverBody>
//           <Box>
//           <FormControl>
//             {/* <FormLabel>Username</FormLabel>
//             <Input placeholder="username" />
//             <FormHelperText>We'll never share your email.</FormHelperText> */}
//             <FormLabel>Restaurant</FormLabel>
//             <Input placeholder="restaurant" />
//             <FormLabel>Meal</FormLabel>
//             <Input placeholder="meal" />
//             <FormLabel>Price</FormLabel>
//             <Input placeholder="price" />
//             <FormLabel>Rating</FormLabel>
//             <Input placeholder="rating" />
//             <FormLabel>Review</FormLabel>
//             <Input placeholder="review" />
            
//           </FormControl>
//           </Box>
//           </PopoverBody>
//         </PopoverContent>
//         </Popover>
//   </div>,
//       <div>
//       <Button key="4" className='b3' onClick={onSignOut}>Log Out


//       <style>{`
//               .b3 {
//                 padding-left: 20px;
//                 padding-right: 20px;
//                 padding-top: 20px;
//                 padding-bottom: 20px;
//                 background-color: #FFFFFF;
//                 position: fixed;
//                 top: 20px;
//                 right: 30px;
//               }
//           `}</style>

//         </Button>
//   </div>,
//       <Button key="3" onClick={(toProfile)}>My Account</Button>,
//       <Button key="2" onClick={toMap}>Find Restaurants</Button>,
//       <Button key="1" type="primary">
//         Home
//       </Button>
//     ]}
//   >
//   </PageHeader>
  
// );

export default FillForm;

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