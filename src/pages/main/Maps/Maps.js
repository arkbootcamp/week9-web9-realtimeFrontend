import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

function Maps(props) {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log(position);
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        if (position.coords.accuracy > 300) {
          alert("Akurasi kurang akurat silahkan pilih ttitik lokasi anda !");
        }
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      });
    } else {
      alert("Not Available");
    }
  }, []);

  return (
    <>
      <Container className="text-center">
        <Navbar />
        <h1>Maps</h1>
        <hr />
        {position.lat === 0 && position.lng === 0 ? (
          <h1>Loading ...</h1>
        ) : (
          <Map
            google={props.google}
            zoom={14}
            initialCenter={position}
            style={{ height: "400px", width: "400px" }}
          >
            <Marker name={"Current location"} position={position} />
          </Map>
        )}

        <hr />
        <h6>Accuracy : {position.accuracy}</h6>
        <h6>Latitude : {position.lat}</h6>
        <h6>Longtitude : {position.lng}</h6>
      </Container>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC5eZ4u3k2B1KUB8GtD4dPGAXwlB0Hq8X0",
})(Maps);
