import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "react-bootstrap";
import classes from "./Map.module.css";

function MyMap() {
  const [userLatAndLong, setUserLatAndLong] = useState({ latitude: 6.5994752, longitude: 3.3488896 });
  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;

    setUserLatAndLong({
      latitude: latitude,
      longitude: longitude,
    });
  };
  const errorCallback = (error) => {
    console.log(error);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <div className={classes["map-wrapper"]}>
      <div>
        <h3>Map view</h3>
        <MapContainer
          center={[userLatAndLong.latitude, userLatAndLong.longitude]}
          zoom={13}
          className={classes["mymap-container"]}
          style={{ height: "200pt", width: "420px" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[userLatAndLong.latitude, userLatAndLong.longitude]}>
            <Popup>
              Your Pickup is
              <br /> available here.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className={classes["results-wrapper"]}>
        <h3>Results</h3>
        <p className="mb-3">Two results found your matching criteria </p>
        <div className={classes["sub-result-wrapper"]}>
          <strong>The Recycling store</strong>
          <address>Lagos, Nigeria</address>
          <p>Open until 5pm </p>
          <div className="d-flex justify-content-between ">
            <p className="text-success fw-bold">Accepting Recyling</p>
            <Button className="bg-success">Save</Button>
          </div>
        </div>
        <div className={classes["sub-result-wrapper"]}>
          <strong>The IntStelling store</strong>
          <address>Ondo, Nigeria</address>
          <p>Open until 4pm </p>
          <div className="d-flex justify-content-between ">
            <p className="text-success fw-bold">Not Accepting Recyling</p>
            <Button className="bg-success">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMap;
