import React, {useState} from 'react'
import { PageHeader, Input, Button, Card } from 'antd';
import { Link } from "@reach/router"

import { auth, db } from "../base.js";
// import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const { TextArea } = Input;

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const onFirstNameChange = (event) => setFirstName(event.target.value)
    const onLastNameChange = (event) => setLastName(event.target.value)

    // const onSignUp = () => {
    //     console.log('sign up')
    //     console.log(email, password, firstName, lastName)

    //     // createUserWithEmailAndPassword(auth, email, password)
    //     //     .catch(function(error) {
    //     //         console.log('error in signup')
    //     //     });

    //     setEmail('')
    //     setPassword('')
    //     setFirstName('')
    //     setLastName('')
    // }

    const onSignUp = (e) => {
        e.preventDefault();
        function onRegister() {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              set(ref(db, "users/" + userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
              });
            })
            .catch((error) => console.log(error));
        }
        onRegister();

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
      };

  return (
    <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Sign Up"
                />
            </div>
            <div className="sign_up_input_container" style={{marginTop: "20px", alignItems:"center", display:"flex", justifyContent:"center"}}>
                <Card title = <div style={{fontSize: 25}}>Welcome to Cravings!</div> style={{ width: 400 }}>
                    <div className="input_container">
                        <div className="input_title">
                            <h2>
                                First Name
                            </h2>
                        </div>
                        <div className="input">
                            <Input placeholder="First Name" onChange={onFirstNameChange}/>
                        </div>
                    </div>
                    
                    <div className="input_container">
                        <div className="input_title" style={{marginTop:'20px'}}>
                            <h2>
                                Last Name
                            </h2>
                        </div>
                        <div className="input">
                            <Input placeholder="Last Name" onChange={onLastNameChange}/>
                        </div>
                    </div>
                    
                    <div className="input_container">
                        <div className="input_title" style={{marginTop:'20px'}}>
                            <h2>
                                Email
                            </h2>
                        </div>
                        <div className="input">
                            <Input placeholder="Email" onChange={onEmailChange}/>
                        </div>
                    </div>
                    
                    <div className="input_container">
                        <div className="input_title" style={{marginTop:'20px'}}>
                            <h2>
                                Password
                            </h2>
                        </div>

                        <div className="input">
                            <Input.Password placeholder="Password" onChange={onPasswordChange}/>
                        </div>
                    </div>

                    <div style={{width: "100%"}}>
                        <div style={{float: "left"}}>
                            <Link to="/sign_in">Have an account? Sign In</Link>
                        </div>

                        <div className="input_button">
                            <Button type="primary" size="large" style={{marginTop:'20px'}} onClick={onSignUp}>
                                Sign Up
                            </Button> 
                        </div>
                    </div>
                </Card>
            </div>
        </div>
  )
}

export default SignUp