import React, { useEffect, useState } from "react";
import { getCoordinates, getMapImageUrl } from "@/lib/getCoordinates";
import useFetchPrivate from "@/app/_hooks/useFetchPrivate";

type Props = {
    adr: string;
}

const MapPage: React.FC<Props> = ({ adr }) => {
    const [address, setAddress] = useState(adr);
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
    const [zoom, setZoom] = useState<number>(15);
    const [mapUrl, setMapUrl] = useState<string>('');
    const [lat, setLat] = useState<number>(37.7749);
    const [lon, setLon] = useState<number>(-122.4194);
    const fetchPrivate = useFetchPrivate()

    const getMap = async () => {
        const coords = await getCoordinates(address);
        setCoordinates(coords);
    };

    useEffect(() => {
        getMap();
    }, [address]);

    useEffect(() => {
        if (coordinates) {
            const url = getMapImageUrl(coordinates[0], coordinates[1], zoom);
            setLat(coordinates[0]);
            setLon(coordinates[1]);
            setMapUrl(url);
        }
    }, [coordinates, zoom]);

    return (
        <div className="flex flex-col items-center content-center gap-3 ">
            <h1 className="font-medium text-[20px] border-b-4 border-strokeorg">{address}</h1>
            {mapUrl && (
                <div className="border-2 border-[#FF6636]  rounded-md ">
                    <img className="rounded-md" src={mapUrl} alt="Map" />
                </div>
            )}

        </div>
    );
};

export default MapPage;
