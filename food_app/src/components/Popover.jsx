import { MoreOutlined } from '@ant-design/icons';
import { navigate } from '@reach/router';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography, Modal } from 'antd';
import React, {useState} from 'react'
// import { ref, set } from "firebase/database";
import { auth, db } from "../base.js";
import { getAuth } from "firebase/auth";
import {uploadBytes, ref as storage_ref} from "firebase/storage";
import {storage} from "../base.js";
import { getDatabase, onValue, ref, set, get, child } from "firebase/database";



import {
  // Popover,
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
  const [image, setImage] = useState(null);
  const onRestChange = (event) => setRest(event.target.value);
  const onMealChange = (event) => setMeal(event.target.value);
  const onPriceChange = (event) => setPrice(event.target.value);
  const onRatingChange = (event) => setRating(event.target.value);
  const onReviewChange = (event) => setReview(event.target.value);
  const onImageChange = (event) => setImage(event.target.files[0]);
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.email);
  const onSubmit = (e) => {
    e.preventDefault();
    const userRef = child(ref(db), `loggedPosts/` + user.uid );
//     console.log(userRef);
    
//     onValue(userRef, (snapshot) => {
//       console.log("here 1");
//       // setID(parseInt(snapshot.val()) + 1);
//       console.log(snapshot.val());
//       console.log(snapshot.key);
//       // setID(parseInt(snapshot.val()) + 1);
//       console.log(parseInt(snapshot.val()) + 1);
//       snapshot.forEach((data) => {
//         console.log("here");
//         console.log(data.key);
//         console.log(data.val());
//         // if (data.id  == "id") {
//         //   setID(parseInt(data.val()) + 1);
//         //   console.log(data.val());
//         //   console.log("setting id");
//         // }
//         console.log(parseInt(data.key) + 1); 
//         // newtID = parseInt(data.key) + 1;
//         setID(parseInt(data.key) + 1);
//         console.log(id);
        
//       });
//       console.log("Here");
//       // console.log(newtID);
//       // console.log(snapshot.val());
//     })
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
    
      if (image == null) return;
      const imageRef = storage_ref(storage, "Images/" + user.uid + "/"+ id);
      uploadBytes(imageRef, image).then(() => {
        alert("Image Uploaded");
      })

    }
    onCreate();

    console.log(id);
    console.log(rest);

    setConfirmLoading(true);
    setTimeout(() => {
      setModal2Open(false);
      setConfirmLoading(false);
    }, 2000);
    
    setRest("");
    setMeal("");
    setPrice("");
    setRating("");
    setReview("");
    setImage(null);
  };

  const [modal2Open, setModal2Open] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal2Open(false);
      setConfirmLoading(false);
    }, 2000);
  };

  
  return (
    <div>
      <Button onClick={() => setModal2Open(true)} size="large">
        Log Post
        {/* <style>{`
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
              `}</style> */}
      </Button>
      <Modal
        title="Log Post"
        centered
        open={modal2Open}
        onOk={handleOk}
        onCancel={() => setModal2Open(false)}
        footer={[
        <Button key="back" onClick={() => setModal2Open(false)}>
          Cancel
        </Button>,
          <Button key="submit" type="primary" loading={confirmLoading} onClick={onSubmit}>
            Submit
          </Button>,
        ]}
      >
        <Box>
          <FormControl>
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
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={onImageChange}/>
          </FormControl>
        </Box>
        {/* <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p> */}
      </Modal>
      {/* <PageHeader
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
            <PopoverHeader fontWeight='semibold' onChange={onSubmit}>Enter Meal</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
              <Box>
              <FormControl>
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
              </FormControl>
              </Box>
              </PopoverBody>
            </PopoverContent>
            </Popover>
      </div>
        ]}
      >
      </PageHeader> */}
  </div>
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

// export default FillForm;
  

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

// const FillForm = (props) => {
//   const [id, setID] = useState(0);
//   const [rest, setRest] = useState("");
//   const [meal, setMeal] = useState("");
//   const [price, setPrice] = useState("");
//   const [rating, setRating] = useState("");
//   const [review, setReview] = useState("");
//   const [image, setImage] = useState(null);
//   const onRestChange = (event) => setRest(event.target.value);
//   const onMealChange = (event) => setMeal(event.target.value);
//   const onPriceChange = (event) => setPrice(event.target.value);
//   const onRatingChange = (event) => setRating(event.target.value);
//   const onReviewChange = (event) => setReview(event.target.value);
//   const onImageChange = (event) => setImage(event.target.files[0]);
//   const auth = getAuth();
//   const user = auth.currentUser;
//   // console.log(user.email);
//   // const auth = getAuth();
//   // const user = auth.currentUser;
//   // console.log("here");
//   // var newtID = 0;
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // console.log(user.uid);
//     const userRef = child(ref(db), `loggedPosts/` + user.uid );
//     console.log(userRef);
    
//     onValue(userRef, (snapshot) => {
//       console.log("here 1");
//       // setID(parseInt(snapshot.val()) + 1);
//       console.log(snapshot.val());
//       console.log(snapshot.key);
//       // setID(parseInt(snapshot.val()) + 1);
//       console.log(parseInt(snapshot.val()) + 1);
//       snapshot.forEach((data) => {
//         console.log("here");
//         console.log(data.key);
//         console.log(data.val());
//         // if (data.id  == "id") {
//         //   setID(parseInt(data.val()) + 1);
//         //   console.log(data.val());
//         //   console.log("setting id");
//         // }
//         console.log(parseInt(data.key) + 1); 
//         // newtID = parseInt(data.key) + 1;
//         setID(parseInt(data.key) + 1);
//         console.log(id);
        
//       });
//       console.log("Here");
//       // console.log(newtID);
//       // console.log(snapshot.val());
//     })
   
//     console.log("submmitting");
//     console.log("id");
//     console.log(id);
//     console.log("id");
//     // setID(newtID);
//     console.log(id);
    
//     function onCreate2() {
//       console.log("submitting")
//       // console.log(newtID);
//       set(ref(db, "loggedPosts/" + user.uid + "/"+ id), {
//         id: id,
//         // setID(db.push().getKey() + 1);
//         resturant: rest,
//         meal: meal,
//         price: price,
//         rate: rating,
//         rev: review,
//       });
//       console.log("done creating");
//       setRest("");
//       setMeal("");
//       setPrice("");
//       setRating("");
//       setReview("");
//       // setID(id + 1);
    
//       if (image == null) return;
//       const imageRef = storage_ref(storage, "Images/" + user.uid + "/"+ id);
//       uploadBytes(imageRef, image).then(() => {
//         alert("Image Uploaded");
//       })

//     }
//     onCreate2();

//     // console.log("id: " + newtID);
//     // console.log(res  t);
   
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setModal2Open(false);
//       setConfirmLoading(false);
//     }, 2000);
//     setRest("");
//     setMeal("");
//     setPrice("");
//     setRating("");
//     setReview("");
//     setImage(null);
    

//   };

//   const [modal2Open, setModal2Open] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);

//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setModal2Open(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

  
//   return (
//     <div>
//       <Button onClick={() => setModal2Open(true)} size="large">
//         Log Post
//         {/* <style>{`
//                   .b2 {
//                     padding-left: 100px;
//                     padding-right: 100px;
//                     padding-top: 100px;
//                     padding-bottom: 100px;
//                     background-color: #FFFFFF;
//                     position: fixed;
//                     top: 275px;
//                     right: 275px;
//                   }
//               `}</style> */}
//       </Button>
//       <Modal
//         title="Log Post"
//         centered
//         open={modal2Open}
//         onOk={handleOk}
//         onCancel={() => setModal2Open(false)}
//         footer={[
//         <Button key="back" onClick={() => setModal2Open(false)}>
//           Cancel
//         </Button>,
//           <Button key="submit" type="primary" loading={confirmLoading} onClick={onSubmit}>
//             Submit
//           </Button>,
//         ]}
//       >
//         <Box>
//           <FormControl>
//             <FormLabel>Restaurant</FormLabel>
//             <Input placeholder="restaurant" onChange={onRestChange}/>
//             <FormLabel>Meal</FormLabel>
//             <Input placeholder="meal" onChange={onMealChange}/>
//             <FormLabel>Price</FormLabel>
//             <Input placeholder="price" onChange={onPriceChange}/>
//             <FormLabel>Rating</FormLabel>
//             <Input placeholder="rating" onChange={onRatingChange}/>
//             <FormLabel>Review</FormLabel>
//             <Input placeholder="review" onChange={onReviewChange}/>
//             <FormLabel>Image</FormLabel>
//             <Input type="file" onChange={onImageChange}/>
//           </FormControl>
//         </Box>
//         {/* <p>some contents...</p>
//         <p>some contents...</p>
//         <p>some contents...</p> */}
//       </Modal>
//       {/* <PageHeader
//         extra={[
//           <div>
//             <Popover placement='top'> 
//             <PopoverTrigger>
            
//           <Button key="5" className='b2'>Log Meal
          

//           <style>{`
//                   .b2 {
//                     padding-left: 100px;
//                     padding-right: 100px;
//                     padding-top: 100px;
//                     padding-bottom: 100px;
//                     background-color: #FFFFFF;
//                     position: fixed;
//                     top: 275px;
//                     right: 275px;
//                   }
//               `}</style>

//             </Button>
//             </PopoverTrigger>
//             <PopoverContent>
//             <PopoverHeader fontWeight='semibold' onChange={onSubmit}>Enter Meal</PopoverHeader>
//               <PopoverArrow />
//               <PopoverCloseButton />
//               <PopoverBody>
//               <Box>
//               <FormControl>
//                 <Button onClick={onSubmit}>Submit</Button>  
//                 <FormLabel>Restaurant</FormLabel>
//                 <Input placeholder="restaurant" onChange={onRestChange}/>
//                 <FormLabel>Meal</FormLabel>
//                 <Input placeholder="meal" onChange={onMealChange}/>
//                 <FormLabel>Price</FormLabel>
//                 <Input placeholder="price" onChange={onPriceChange}/>
//                 <FormLabel>Rating</FormLabel>
//                 <Input placeholder="rating" onChange={onRatingChange}/>
//                 <FormLabel>Review</FormLabel>
//                 <Input placeholder="review" onChange={onReviewChange}/>
//               </FormControl>
//               </Box>
//               </PopoverBody>
//             </PopoverContent>
//             </Popover>
//       </div>
//         ]}
//       >
//       </PageHeader> */}
//   </div>
//   )

// }
// // const MenuComponent = () => (
  

// //   <PageHeader
// //     title="Cravings"
// //     className="site-page-header"
// //     extra={[
// //       <div>
// //           <Button key="6" className='b1'>Saved Post
      
// //             <style>{`
// //               .b1 {
// //                 padding-left: 100px;
// //                 padding-right: 100px;
// //                 padding-top: 100px;
// //                 padding-bottom: 100px;
// //                 background-color: #FFFFFF;
// //                 position: fixed;
// //                 bottom: 100px;
// //                 right: 270px;
// //               }
// //           `}</style>

// //             </Button>
// //       </div>,
// //       <div>
// //         <Popover placement='top'> 
// //         <PopoverTrigger>
        
// //       <Button key="5" className='b2'>Log Meal
      

// //       <style>{`
// //               .b2 {
// //                 padding-left: 100px;
// //                 padding-right: 100px;
// //                 padding-top: 100px;
// //                 padding-bottom: 100px;
// //                 background-color: #FFFFFF;
// //                 position: fixed;
// //                 top: 275px;
// //                 right: 275px;
// //               }
// //           `}</style>

// //         </Button>
// //         </PopoverTrigger>
// //         <PopoverContent>
// //         <PopoverHeader fontWeight='semibold'>Enter Meal</PopoverHeader>
// //           <PopoverArrow />
// //           <PopoverCloseButton />
// //           <PopoverBody>
// //           <Box>
// //           <FormControl>
// //             {/* <FormLabel>Username</FormLabel>
// //             <Input placeholder="username" />
// //             <FormHelperText>We'll never share your email.</FormHelperText> */}
// //             <FormLabel>Restaurant</FormLabel>
// //             <Input placeholder="restaurant" />
// //             <FormLabel>Meal</FormLabel>
// //             <Input placeholder="meal" />
// //             <FormLabel>Price</FormLabel>
// //             <Input placeholder="price" />
// //             <FormLabel>Rating</FormLabel>
// //             <Input placeholder="rating" />
// //             <FormLabel>Review</FormLabel>
// //             <Input placeholder="review" />
            
// //           </FormControl>
// //           </Box>
// //           </PopoverBody>
// //         </PopoverContent>
// //         </Popover>
// //   </div>,
// //       <div>
// //       <Button key="4" className='b3' onClick={onSignOut}>Log Out


// //       <style>{`
// //               .b3 {
// //                 padding-left: 20px;
// //                 padding-right: 20px;
// //                 padding-top: 20px;
// //                 padding-bottom: 20px;
// //                 background-color: #FFFFFF;
// //                 position: fixed;
// //                 top: 20px;
// //                 right: 30px;
// //               }
// //           `}</style>

// //         </Button>
// //   </div>,
// //       <Button key="3" onClick={(toProfile)}>My Account</Button>,
// //       <Button key="2" onClick={toMap}>Find Restaurants</Button>,
// //       <Button key="1" type="primary">
// //         Home
// //       </Button>
// //     ]}
// //   >
// //   </PageHeader>
  
// // );

// export default FillForm;

// // import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
// // import { Menu } from 'antd';
// // import React from 'react';
// // function getItem(label, key, icon, children, type) {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   };
// // }
// // const items = [
// //   getItem('Home', 'sub1', <HomeOutlined />),
// //   getItem('Find Restaurants', 'sub2', <AppstoreOutlined />),
// //   getItem('My Account', 'sub4', <UserOutlined />),
// // ];
// // const MenuComponent = () => {
// //   const onClick = (e) => {
// //     console.log('click ', e);
// //   };
// //   return (
// //     <Menu
// //       onClick={onClick}
// //       style={{
// //         width: 256,
// //       }}
// //       defaultSelectedKeys={['1']}
// //       defaultOpenKeys={['sub1']}
// //       mode="inline"
// //       items={items}
// //     />
// //   );
// // };
// // export default MenuComponent;