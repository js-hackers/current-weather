import {css, keyframes} from '@emotion/core';

export type Styles = {
  [key: string]:
    | ReturnType<typeof css>
    | ReturnType<typeof keyframes>;
};

export type OWMParams = {[key: string]: string};

export enum OWMUnits {
  Imperial = 'imperial',
  Metric = 'metric',
  Standard = 'standard',
}

export type OWMWeatherCondition = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type CurrentWeatherData = {
  clouds_all: number;
  country: string;
  dt: number;
  humidity: number;
  lat: number;
  lon: number;
  name: string;
  pressure: number;
  rain_1h: number;
  rain_3h: number;
  snow_1h: number;
  snow_3h: number;
  sunrise: number;
  sunset: number;
  temp: number;
  temp_feels_like: number;
  temp_max: number;
  temp_min: number;
  timezone: number;
  units: OWMUnits;
  weather: OWMWeatherCondition[];
  wind_deg: number;
  wind_speed: number;
};

export type ForecastItem = {
  clouds_all: number;
  dt: number;
  humidity: number;
  pressure: number;
  pressure_grnd_level: number;
  pressure_sea_level: number;
  rain_3h: number;
  snow_3h: number;
  temp: number;
  temp_feels_like: number;
  temp_max: number;
  temp_min: number;
  weather: OWMWeatherCondition[];
  wind_deg: number;
  wind_speed: number;
};

export type ForecastWeatherData = {
  country: string;
  lat: number;
  list: ForecastItem[];
  lon: number;
  name: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  units: OWMUnits;
};
