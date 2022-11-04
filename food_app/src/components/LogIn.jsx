import React, {useState} from 'react'
import { PageHeader, Input, Button, Card } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../base.js";
import { Link } from "@reach/router"

import Alert from '@mui/material/Alert';
const { TextArea } = Input;


const LogIn = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailChange = (event) => setEmail(event.target.value)
   
    const onPasswordChange = (event) => setPassword(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        function onRegister() {
          
          signInWithEmailAndPassword(auth, email, password).catch((error) =>
        //   <Alert severity="error">This is an error alert — check it out!</Alert>
            errorMessage(),
            // console.log(error),
            alert("Incorrect Username/Password")
            
            // console.log(error)
          );
        }
        onRegister();
        // console.log('data before send:',email,password)
        setEmail("")
        setPassword("")
        
    };
    const errorMessage = () => {
        console.log("signed in");
        return (
            <Alert severity="error">This is an error alert — check it out!</Alert>
            
        );
        
    };

  return (
    <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Log In"
                />
            </div>
            <div className="sign_up_input_container" style={{marginTop: "20px", alignItems:"center", display:"flex", justifyContent:"center"}}>
                <Card title = <div style={{fontSize: 25}}>Welcome to Cravings!</div> style={{ width: 400 }}>
                    
                    <div className="input_container">
                        <div className="input_title">
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
                    w

                    <div style={{width: "100%"}}>
                        <div style={{float: "left"}}>
                            <Link to="/sign_up">Don't have an account? Sign Up</Link>
                        </div>

                        <div className="input_button">
                            <Button type="primary" size="large" style={{marginTop:'20px'}} onClick={handleSubmit}>
                                Log In
                            </Button> 
                        </div>
                    </div>
                </Card>
            </div>
        </div>
  )
}

export default LogIn