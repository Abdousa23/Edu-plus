// pages/MapPage.tsx
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { getLocationCoordinates } from "@/lib/getLocationCoordinates";

interface MapPageProps {
    location: string;
}

const MapPage: React.FC<MapPageProps> = async ({ location }) => {
    const result = await getLocationCoordinates(location);
    const { lat, lng } = result ? result : { lat: 0, lng: 0 };
    const center = { lat, lng }; // Los Angeles coordinates

    return (
        <div style={{ height: "400px" }}>
            <GoogleMap
                mapContainerStyle={{ height: "100%" }}
                center={center}
                zoom={9}
                options={{ mapId: "YOUR_MAP_ID" }} // Replace with your own map ID
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default MapPage;
