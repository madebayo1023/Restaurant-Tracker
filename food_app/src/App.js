import logo from './logo.svg';
import './App.css';
import './index.css'
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./Home";
import MapPage from "./components/MapPage";
import UsrProfile from "./components/userProfile";
import { Maps } from './components/GoogleMapsApi';
import { Router, Link } from '@reach/router';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app_container"> 
    <Router> 
        <LogIn path="/log_in" default/>
        <SignUp path="/sign_up"/>
        <Home path="/home"/>
        <MapPage path="/map"/>
        <UsrProfile path="/profile"/>
    </Router>
</div>
  );
}

export default App;