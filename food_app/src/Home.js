import React, { useState, useContext, useEffect } from "react";
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
import { getDatabase, onValue, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

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
  const [name, setName] = useState('');
  const [rest, setRest] = useState('');
  const [meal, setMeal]= useState('');
  const [price, setPrice]= useState('');
  const [rat, setRat]= useState('');
  const [rev, setRev]= useState('');
  const [image, setImage]= useState('');
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
  get(child(userRef, `loggedPosts/${user.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((data) => {
        // setMeal(data.val());
        // console.log(data.val())
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
