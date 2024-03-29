"use client";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import Loading from "./loading";
import WSMarker from "@/components/MapFeedContainer/WSMarker/WSMarker";
import { Data } from "@/types/data";

export const Map = ({ data }: Data) => {
  // useEffect(() => {
  //   const el = document.getElementsByClassName("mapInFeed")[0];
  //   const topPos = el.getBoundingClientRect().top;
  //   console.log("topPos", topPos);
  //   // window.scrollTo(0, topPos);
  // });

  // console.log("Map component loading...");
  let features = data.features;

  const mapOptions = {
    center: data.features.length
      ? data.features[0].properties.center.filter(() => true).reverse() // clone, then reverse to get lat, lng
      : [51.505, -0.09],
    zoom: data.features.length ? data.features[0].properties.zoom : 4,
    scrollWheelZoom: true,
    zoomControl: false,
    attributionControl: false,
  };
  // console.log(`mapOptions: ${JSON.stringify(mapOptions, null, 2)}`);

  return (
    <>
      <MapContainer
        className="mapInFeed w-full h-60 sticky top-0 z-10
        md:h-full"
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <GeoJSON key={data.publicId} data={data} /> */}
        {features.map((feature) => {
          // console.log(feature.geometry.coordinates);
          return <WSMarker key={feature._id} feature={feature} />;
        })}
      </MapContainer>
    </>
  );
};

export default Map;
