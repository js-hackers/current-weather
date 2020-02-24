/** @jsx jsx */
import CurrentWeatherData from './CurrentWeatherData';
import ForecastWeatherData from './ForecastWeatherData';
import {jsx} from '@emotion/core';

export const App: React.FC = () => (
  <div>
    <CurrentWeatherData />
    <ForecastWeatherData />
  </div>
);

export default App;
