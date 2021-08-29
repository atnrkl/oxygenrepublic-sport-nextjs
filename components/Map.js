import { Component, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function Map() {
  const [state, setState] = useState({
    viewport: {
      width: "100%",
      height: "300px",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  });
  // console.log(process.env.MAPBOX_API_KEY);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiZGVzaXNlIiwiYSI6ImNrczdmY3V6eTBrNzMydXJuaHFxMTVhZnoifQ.y-dOyCVmbYSf02swjcRT0A"
      onViewportChange={(viewport) => setState({ viewport })}
      {...state.viewport}
    />
  );
}

export default Map;
