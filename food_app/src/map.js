import React, { useState, useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import MapComponent from "./components/MapPage";

function Map() {
  const [rest, setRestaurant] = useState("");

  const onInputChange = (event) => {
    setRestaurant(event.target.value);
  }

  return (
    <div>
      <NavBar name="I'm Craving..."></NavBar>
      {/* <div className="input-container">
        <div className="input">
          <input type="text" placeholder="I'm craving . . ." onChange={onInputChange}></input>
        </div>
      </div> */}
      <MapComponent restaurant = {rest}></MapComponent>
    </div>
  );
}
export default Map;
