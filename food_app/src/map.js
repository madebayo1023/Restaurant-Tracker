import React, { useState, useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import MapComponent from "./components/MapPage";


function Map() {
  return (
    <div>
      <div class="topnav">
      <input type="text" placeholder="I'm craving . . ."></input>
    </div>
      <NavBar name=""></NavBar>
      <MapComponent></MapComponent>
    </div>
  );
}
export default Map;
