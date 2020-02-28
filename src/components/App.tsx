/** @jsx jsx */
import CurrentWeatherData from './CurrentWeatherData';
import ForecastWeatherData from './ForecastWeatherData';
import Heading from './HeadingExampleExtracted';
import {jsx} from '@emotion/core';

export const App: React.FC = () => (
  <div>
    <Heading color='red' size='large' />
    <CurrentWeatherData />
    <ForecastWeatherData />
  </div>
);

export default App;
