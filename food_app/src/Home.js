import React, { useState, useContext, useEffect , Image} from "react";
import { Button } from "antd";
import { auth, db } from "./base";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
// import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { ref, onValue } from "firebase/database";
import FillForm from "./components/Popover";
import NavBar from "./components/NavBar";
import MenuComponent from "./components/Popover";
import { getDatabase, onValue, ref, set, get, child, onChildAdded } from "firebase/database";
import { getAuth } from "firebase/auth";
// import { storage } from "firebase/storage";
import {storage} from "./base.js";

import {uploadBytes, ref as storage_ref, getDownloadURL} from "firebase/storage";

function Home() {
  // const { currentUser } = useContext(AuthContext);
  // const [username, setUsername] = useState("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentUser) {
  //     const starCountRef = ref(db, "users/" + currentUser.uid);
  //     onValue(starCountRef, (snapshot) => {
  //       if (snapshot.exists()) {
  //         var data = snapshot.val();
  //         setUsername(data.firstName + " " + data.lastName);
  //       }
  //     });
  //   }
  // }, [currentUser]);

  // const clickLogin = () => {
  //   if (currentUser) {
  //     signOut(auth);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [rest, setRest] = useState('');
  const [meal, setMeal]= useState('');
  const [price, setPrice]= useState('');
  const [rat, setRat]= useState('');
  const [rev, setRev]= useState('');
  const [image, setImage]= useState(undefined);
  
  // const [exp, setExp] = useState([{
  //   rest: "rest",
  //   meal: "meal",
  //   price: "price",
  //   rat: "rate",
  //   rev: "review",

  // }]);
  const auth = getAuth();
  const user = auth.currentUser;
  const userRef = ref(db);
  get(child(userRef, `users/${user.uid}/firstName`)).then((snapshot) => {
    if (snapshot.exists()) {
        setName(snapshot.val());
      // console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  // let meals = [];
  // console.log(child(userRef, `loggedPosts/${user.uid}`));
  // const rref = 
  // onChildAdded(child(userRef, `loggedPosts/${user.uid}`), (data) => {
  //   addMeal()
  // })
  get(child(userRef, `loggedPosts/${user.uid}`)).then((snapshot) => {
  // onValue(userRef, (snapshot) =>)
    if (snapshot.exists()) {
      snapshot.forEach((data) => {
        // setMeal(data.val());
        // console.log(data.val())
        setId(parseInt(data.key));
        data.forEach((meal) => {
          // console.log(meal.val());
          
          if (meal.key == "meal") {
            // meals.push(meal.val());

            setMeal(meal.val());
          }
          if (meal.key == "price") {
            setPrice(meal.val());
          }
          if (meal.key == "resturant") {
            setRest(meal.val());
          }
          if (meal.key == "rate") {
            setRat(meal.val());
          }
          if (meal.key == "rev") {
            setRev(meal.val());
          }
          
          // setRest(data.rest);
          // setMeal(data.meal);
          // console.log(data.key)
          
        })
      })
        // setName(snapshot.val());
      // console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  // child(userRef, `users/${user.uid}/firstName`)
  const imageRef = storage_ref(storage, "Images/" + user.uid + "/"+ id);
  getDownloadURL(imageRef)
    .then((url) => {
      console.log(id);
      const img = document.getElementById("img");
      console.log(url);
      // img.setAttribute('src', url);
      setImage(url);
      console.log(image);
    })
    .catch((e) => {
      console.log("whoopsies" + e);
    });

  // var postRef = ref('loggedPosts');
  // postRef.orderByKey().on('child_added', (snapshot) => {
  //   console.log(snapshot.key);
  // });
  // console.log(data[0].val())
  // console.log(meal);

  return (
    <div>
      <NavBar name="Home Page"></NavBar>
      <h1>Welcome, {name}</h1>
      
      <MenuComponent></MenuComponent>
      <p>Your last meal was {meal} at {rest}</p>
      <p>It cost {price} </p>
      <p>Your rating was {rat}</p>
      <p>Your review: {rev}</p>
      <img style={{height: 200, width: 200}} src={image} alt="Food Image"/>
      {/* <img style={{height: 200, width: 200}} /> */}
      
      {/* {currentUser && <p>Welcome, {username}</p>}
      <div className="buttons">
        <button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Login"}
        </button>
      </div> */}
    </div>
  );
}

export default Home;
