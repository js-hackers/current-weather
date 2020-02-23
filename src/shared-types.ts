export enum Units {
  Imperial = 'imperial',
  Metric = 'metric',
  Standard = 'standard',
}

export type OWMParams = {[key: string]: string};

export type WeatherCondition = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type ApiResponseData = {
  country: string;
  dt: number;
  feels_like: number;
  humidity: number;
  lat: number;
  lon: number;
  name: string;
  sunrise: number;
  sunset: number;
  temp_max: number;
  temp_min: number;
  temp: number;
  timezone: number;
  units: Units;
  weather: WeatherCondition[];
};
