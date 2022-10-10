import logo from './logo.svg';
import './App.css';
import './index.css'
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Maps } from './components/GoogleMapsApi';
import { Router, Link } from '@reach/router';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app_container"> 
    <Router> 
        <LogIn path="/log_in" default/>
        <SignUp path="/sign_up"/>

    </Router>
    {/* <BrowserRouter>
      <Routes>
        <Route exact path="/sign_in" element={<LogIn />}/>
        <Route exact path="/sign_up" element={<SignUp />}/>
      </Routes>
    </BrowserRouter> */}
</div>
  );
}

export default App;