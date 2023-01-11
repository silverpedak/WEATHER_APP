import axios from "axios";
import { Weather } from "../pages";

const WEATHER_UNITS_CONFIG = "metric";

export interface APIResponse {
  data: Weather;
  error: Error | null;
}

const httpCommon = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getWeatherByCity = (city: string): Promise<APIResponse> => {
  return httpCommon.get("/", {
    params: {
      q: city,
      appid: process.env.REACT_APP_API_KEY,
      units: WEATHER_UNITS_CONFIG,
    },
  });
};
