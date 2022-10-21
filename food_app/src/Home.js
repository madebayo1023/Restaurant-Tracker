import React, { useState, useContext, useEffect } from "react";
import { Button } from "antd";
import { auth, db } from "./base";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
// import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import MenuComponent from "./components/Home";
import log_saved_post from "./components/Home";

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


  return (
    <div>
      <MenuComponent></MenuComponent>
      <log_saved_post></log_saved_post>
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
