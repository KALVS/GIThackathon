import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import classes from "./Map.module.css";
function MyMap() {
  return (
    
    <div className={classes["map-wrapper"]}>
      <div>
        <h3>Map view</h3>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400pt" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div clssName={classes["results-wrapper"]}>
        <h3>Results</h3>
        <p className="mb-3">Two results found your matching criteria </p>
        <div className={classes["sub-result-wrapper"]}>
          <strong>The Recycling store</strong>
          <address>Lagos, Nigeria</address>
          <p>Open until 5pm </p>
          <p className="text-success fw-bold">Accepting Recyling</p>
        </div>
        <div className={classes["sub-result-wrapper"]}>
          <strong>The Recycling store</strong>
          <address>Lagos, Nigeria</address>
          <p>Open until 5pm </p>
          <p className="text-success fw-bold">Accepting Recyling</p>
        </div>
      </div>
    </div>
  );
}

export default MyMap;
