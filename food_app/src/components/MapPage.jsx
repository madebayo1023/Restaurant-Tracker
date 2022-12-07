import React, {useEffect, useState} from 'react'
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

// const center = {
//   lat: 40.1124969,
//   lng: -88.2267544
// };

const inputStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px"
};

const libraries = ["places"]

function MyComponent(props) {
  
  const[lat, setLat] = useState(40.1124969);
  const[long, setLong] = useState(-88.2267544);
  const[restaurant, setRestaurant] = useState("");
  const[zoom, setZoom] = useState(15);
  
  let center = {
      lat: lat,
      lng: long
  };

  console.log("here");

  // const onLoad = (autocomplete) => {
  //   console.log('autocomplete: ', autocomplete)
  
  //   this.autocomplete = autocomplete
  // };
  
  // const onPlaceChanged = () => {
  //   console.log("entered places changed")
  //   if (this.autocomplete !== null) {
  //     console.log(this.autocomplete.getPlace())
  //   } else {
  //     console.log('Autocomplete is not loaded yet!')
  //   }
  // };

  function getCoordinates(address){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+"AIzaSyBEOzzMj-LFumhsuIPrMvBMFzSxexa_Wfk") //AIzaSyAYTJ0944YPKlB78BJoXVhdriSmUffvBfY 
      .then(response => response.json())
      .then(data => {
        let latitude = data.results[0].geometry.location.lat;
        let longitude = data.results[0].geometry.location.lng;
        setLat(latitude);
        setLong(longitude);
      })
    console.log("lat1: " + lat);
    console.log("long1: " + long);
    return [lat, long];
  }

  const onInputChange = (event) => {
    setRestaurant(event.target.value);
    getCoordinates(restaurant);
    setZoom(20);

  }
  console.log("restaurant: " + restaurant);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAYTJ0944YPKlB78BJoXVhdriSmUffvBfY"
      libraries={libraries}
    >

      <GoogleMap
        mapContainerClassName='gMap'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
      <Autocomplete
        // onLoad={onLoad}
        // onPlacesChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Find a Restaurant!"
          style={inputStyle}
          onChange={onInputChange}
        />
      </Autocomplete>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)