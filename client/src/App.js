import * as React from "react";
import { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "./app.css";
import "mapbox-gl/dist/mapbox-gl.css";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { format } from "timeago.js";

function App() {
  const [newPlace, setNewPlace] = useState(null);
  const [pinner, setpinner] = React.useState([]);
  const [showPopup, setShowPopup] = React.useState(true);
  const [currentPlaceId, setcurrentPlaceId] = useState(null);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pinner");
        setpinner(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleMarkerClick = (id) => {
    setcurrentPlaceId(id);
  };

  const addClick = (e) => {
     const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

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
      onDblClick={addClick}
    >
      {pinner.map((p) => (
        <>
          <Marker
            longitude={p.long}
            latitude={p.lat}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => handleMarkerClick(p._id)}
          />
          if () {} else {}
          {p._id === currentPlaceId && (
            <Popup
              longitude={p.long}
              latitude={p.lat}
              anchor="left"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setcurrentPlaceId(null)}
            >
              <div className="mark">
                <div className="card">
                  <label>Place</label>
                  <h4 className="cr1">{p.title}</h4>
                  <label>Review</label>
                  <p className="cr1">{p.desc}</p>
                  <label>Rating</label>
                  <div className="str">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <label>Information</label>
                  <span className="user">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="userme">{format(p.createdAt)}</span>
                </div>
              </div>
            </Popup>
          )}
        </>
        ))}
        {newPlace && (
          <Popup
            longitude={newPlace.long}
            latitude={newPlace.lat}
            anchor="left"
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
          >
            hello
            </Popup>
      )}
    </Map>
  );
}

export default App;
