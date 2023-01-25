export type WeatherMain = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
};

export type WeatherSys = {
  country: string;
  sunrise: number;
  sunset: number;
  last_updated: number;
};

export type WeatherDesc = {
  main: string;
  description: string;
};

export type WeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Weather = {
  main: WeatherMain;
  name: string;
  sys: WeatherSys;
  weather: WeatherDesc[];
  wind: WeatherWind;
};
