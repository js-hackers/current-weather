/** @jsx jsx */
import DataWithTitle from './DataWithTitle';
import {jsx} from '@emotion/core';
import {useForecast} from '../hooks/use-weather';

export const ForecastWeatherData: React.FC = () => {
  const {data, error, isLoading} = useForecast();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <DataWithTitle data={data} title='Forecasted Weather Data' />;
};

export default ForecastWeatherData;
