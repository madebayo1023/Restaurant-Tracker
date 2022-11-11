import { getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";
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

const UsrProfile = (props) => {
 
        const auth = getAuth();
        const user = auth.currentUser;
        var pageTitle = 'Welcome, { user.email } ';
        console.log(pageTitle);
        console.log(user.email);
        
        return (
            // <h2>"Hello"</h2>
            <h1>hello, { user.email }</h1>
        )
    
    
}

export default UsrProfile;
