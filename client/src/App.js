import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <Map
      initialViewState={{
        latitude: 34.047863,
        longitude: 100.619655,
        zoom: 4,
        width: "100vw",
        height: "100vh",
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    >
      <Marker
        longitude={84.124008}
        latitude={	28.394857}
        color="red"
        
      />
      <Marker
        longitude={5.124008}
        latitude={	9.394857}
        color="red"
        you are here
      />
    </Map>
  );
}

export default App;
