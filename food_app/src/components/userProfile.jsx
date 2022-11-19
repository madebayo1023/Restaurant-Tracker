import { FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set , onValue, on} from "firebase/database";
import { db } from "../base";
import { ref as sRef } from 'firebase/storage';
// import { firebase } from "firebase/database"
import React, { useEffect, useState } from 'react';
import { useEditableControls, useRangeSlider } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
// import { ref } from "firebase/database";
// import { useDatabaseSnapshot } from "@react-query-firebase/database";
// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
// //   const displayName = user.displayName;
//   const email = user.email;
// //   const photoURL = user.photoURL;
// //   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// //   ProfileComponent();
//   console.log(uid);
// }
// const getUser = user => {
//     return db.ref('users/${user.uid}')
// }

const getName = (newtRef) => {
    return newtRef.data();
}

const UsrProfile = (props) => {
 
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user.email);
        // console.log("ellie");
        // con  st newRef = db.getReference('users');
        
        // console.log(ref);
        
        // const ref = ref(db, "users/" + user.uid)
        // newRef.child("firstname").once('value', getuserName);
        // function getuserName(snapshot) {
        //     // snapshot.forEach(userSnapshot => {

        //     // })
        //     var val = snapshot.val();
        //     console.log(val);
        // }
        const rref = ref(db, "/users/" + user.uid +"/firstName/");
        // const db = getDatabase();
        // var ref = new Firebase("https://food-diary-cs222-default-rtdb.firebaseio.com/users/Xyrgv4DxTzZNbIBq9CirbEqWnFQ2/firstName");
        // const ref = db.ref("users/" + user.uid  + "/firstName/");
        // console.log();
        // const newtRef = db.ref();
        // ref.on('value', (snapshot) => {
        //     console.log("hello");
          
        //   }); 
        console.log(rref.val);
        rref.on('value', (snapshot) => {
            console.log(snapshot.val());
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          });
        var pageTitle = 'Welcome, { user.email } ';
        // const query = useDatabaseSnapshot(["fname", "s"], ref)
        // console.log(ref.firstName);
        // console.log(ref);
        // console.log(document.getElementById('firstName'));
        const userId = user.uid;
        // console.log(ref);
        // newtRef.once("value").then(nameSnapshot => nameSnapshot.val())
        // getName(newtRef)
        //     .then(firstName => { 
        //         /* ... do something ... */ 
        //         console.log("here");
        //     })
        //     .catch(err => { 
        //         /* ... handle errors ... */ 
        //         console.log(err)
        // });
        
        // newRef.addListenerForSingleValueEvent(new ValueEventListener() {
        // i cant hear u the song is too good not taking off headphones
        // })
        
        return (
            // <h2>"Hello"</h2>
            <h1>hello, { user.email }</h1>
        )
    
    
}

export default UsrProfile;
