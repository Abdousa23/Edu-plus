// geocoding.ts
import fetch from "node-fetch";

interface GeocodingResult {
  lat: number;
  lng: number;
}

export async function getLocationCoordinates(locationName: string): Promise<GeocodingResult | null> {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=YOUR_API_KEY`
    );
    const data:any = await response.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      console.error("Location not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching geocoding data:", error);
    return null;
  }
}
