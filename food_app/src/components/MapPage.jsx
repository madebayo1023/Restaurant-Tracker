import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 40.1124969,
  lng: -88.2267544
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAYTJ0944YPKlB78BJoXVhdriSmUffvBfY"
    >
      <GoogleMap
        mapContainerClassName='gMap'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)