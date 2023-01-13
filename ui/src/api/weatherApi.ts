import axios from "axios";
import { Weather } from "../pages";

const WEATHER_UNITS_CONFIG = "metric";
const API_BASE_URL =
  "https://us-central1-weather-proxy-api.cloudfunctions.net/app/api";

export interface APIResponse {
  data: Weather;
  error: Error | null;
}

const httpCommon = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getWeatherByCity = (city: string): Promise<APIResponse> => {
  return httpCommon.get("/api", {
    params: {
      q: city,
      units: WEATHER_UNITS_CONFIG,
    },
  });
};
