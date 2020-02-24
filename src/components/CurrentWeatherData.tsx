/** @jsx jsx */
import DataWithTitle from './DataWithTitle';
import {jsx} from '@emotion/core';
import {useCurrent} from '../hooks/use-weather';

export const CurrentWeatherData: React.FC = () => {
  const {data, error, isLoading} = useCurrent();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <DataWithTitle data={data} title='Current Weather Data' />;
};

export default CurrentWeatherData;
