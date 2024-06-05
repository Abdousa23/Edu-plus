import axios from 'axios';
const MAPBOX_API_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const MAPBOX_BASE_URL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static';
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWFqZHplZCIsImEiOiJjbHd3bGU2M3oxMHhoMmxyM3AyZjFwdzFyIn0.hNJ8gDIhlMddLPysUeNDXQ';

export const getCoordinates = async (address: string): Promise<[number, number] | null> => {
  try {
    const response = await axios.get(`${MAPBOX_API_URL}/${encodeURIComponent(address)}.json`, {
      params: {
        access_token: MAPBOX_ACCESS_TOKEN,
        limit: 1,
      },
    });

    if (response.data.features && response.data.features.length > 0) {
      const [longitude, latitude] = response.data.features[0].geometry.coordinates;
      console.log("nigga" , [latitude, longitude])
      return [latitude, longitude];
    }

    return null;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
};



export const getMapImageUrl = (
  lat: number,
  lon: number,
  zoom: number = 14,
  width: number = 600,
  height: number = 600,
  bearing: number = 0,
  pitch: number = 0,
  overlay: string = '',
  bbox: string = '',
  auto: boolean = false,
  retina: boolean = false
): string => {
  let url = `${MAPBOX_BASE_URL}${overlay}/${lon},${lat},${zoom},${bearing},${pitch}`;

  if (bbox) {
    url += `|${bbox}`;
  } else if (auto) {
    url += '|auto';
  }

  url += `/${width}x${height}`;

  if (retina) {
    url += '@2x';
  }

  url += `?access_token=${MAPBOX_ACCESS_TOKEN}`;
  return url;
};