"use client";

import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Link from "next/link";

type Props = {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  title: string;
  size?: string;
  style?: string;
};

const MapCard: React.FC<Props> = ({
  centerX,
  centerY,
  markerX,
  markerY,
  title,
  size,
  style,
}) => {
  const MapContainerClasses = `${size} ${style || ""}`;

  const mapContainerId = uuidv4();
  const mapId: string = "111"; // publicId

  return (
    <>
      <figure
        className="flex flex-col justify-center items-center w-full px-4 pt-4 rounded-lg bg-white
          max-w-sm 2xl:max-w-md"
      >
        <Link href={`/map/${mapId}`} passHref className="w-full">
          <MapContainer
            id={mapContainerId}
            className={MapContainerClasses}
            center={[centerX, centerY]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
            attributionControl={false}
            dragging={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[markerX, markerY]}>
              {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
            </Marker>
          </MapContainer>
          <figcaption className="w-full py-4 text-center text-md">
            {title}
          </figcaption>
        </Link>
      </figure>
    </>
  );
};

export default MapCard;
