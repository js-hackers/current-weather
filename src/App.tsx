import React, {useState} from 'react';
// eslint-disable-next-line sort-imports
import './App.css';

enum Units {
  Imperial = 'imperial',
  Metric = 'metric',
  Standard = 'standard',
}

type WeatherCondition = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type ApiResponseData = {
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

const getWeather = async (weatherEndppoint: string): Promise<ApiResponseData> => {
  const res = await fetch(weatherEndppoint);
  const weatherData = await res.json();
  console.log(weatherData);
  return weatherData;
};

const visualizeData = (fetchedWeather: { [s: string]: unknown } | ArrayLike<unknown>): JSX.Element => {
  const data = Object.entries(fetchedWeather);
  console.log('data', data);
  return <div>{data.map(el => {
    const [key, value] = el;
    return <h1 key={key}>{key}: {key === 'weather' ? null : value}</h1>;
  })}</div>;
};

const App = (): JSX.Element => {
  const apiEndpoint = 'https://weather-api-4h1rqoyzb.now.sh/weather';
  const [weatherEndppoint, setWeatherEndpoint] = useState(apiEndpoint);
  const [zip, setZip] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const units = ['Imperial', 'Celsius', 'Standard'];
  const zipLength = 5;
  return (
    <div className='App'>
      <input placeholder='Zip Code (optional)' onChange={e => {
        if (e.target.value.length === zipLength) {
          setZip(e.target.value);
          if (weatherEndppoint.includes('?')) setWeatherEndpoint(`${weatherEndppoint}&zip=${e.target.value}`);
          else setWeatherEndpoint(`${apiEndpoint}?zip=${e.target.value}`);
        }
      }}></input>
      <select onChange={e => {
        if (e.target.value.length) setWeatherEndpoint(`${apiEndpoint}?units=${e.target.value}`);
        else setWeatherEndpoint(apiEndpoint);
      }}>
        <option value=''>Specify units</option>
        {units.map((unit: string) => <option key={unit} value={unit.toLowerCase()}>{unit}</option>)}
      </select>
      <button disabled={!(!zip.length || zip.length === zipLength)}
        onClick={async () => {
          console.log(weatherEndppoint);
          setWeatherData(await getWeather(weatherEndppoint));
        }}>Get Weather Data
      </button>
      {weatherData ? visualizeData(weatherData) : null}
    </div>
  );
};

export default App;
