import React from 'react'
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 40.1124969,
  lng: -88.2267544
};

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


function MyComponent(props) {
    // this.onLoad = this.onLoad.bind(this)
    // this.onPlaceChanged = this.onPlaceChanged(this)

  // const libraries = ["places"]

  // const onLoad = (autocomplete) => {
  //   console.log('autocomplete: ', autocomplete)
  
  //   this.autocomplete = autocomplete
  // };
  
  // const onPlaceChanged = () => {
  //   if (this.autocomplete !== null) {
  //     console.log(this.autocomplete.getPlace())
  //   } else {
  //     console.log('Autocomplete is not loaded yet!')
  //   }
  // };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAYTJ0944YPKlB78BJoXVhdriSmUffvBfY"
      // libraries={libraries}
    >
      <GoogleMap
        mapContainerClassName='gMap'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      {/* <Autocomplete
        onLoad={onLoad}
        onPlacesChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={inputStyle}
        />
      </Autocomplete> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)