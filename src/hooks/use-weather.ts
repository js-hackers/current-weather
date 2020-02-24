import {CurrentWeatherData, ForecastWeatherData} from '../shared-types';
import {useEffect, useState} from 'react';

export const useCurrent = (latitude?: number, longitude?: number): {
  data: CurrentWeatherData | null;
  error: Error | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<CurrentWeatherData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    (async (): Promise<void> => {
      try {
        const baseUrl = 'https://weather-api.js-hackers.now.sh/current';
        const queryString = (
          typeof latitude === 'number'
          && typeof longitude === 'number'
        )
          ? `?lat=${latitude}&lon=${longitude}`
          : '';
        const response = await fetch(`${baseUrl}${queryString}`);
        if (!response.ok) {
          throw Object.assign(new Error(), {
            message: 'Fetch response not OK',
            name: 'FetchError',
            response,
          });
        }
        setData(await response.json());
      }
      catch (err) {
        setError(err);
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, [latitude, longitude]);

  return {data, error, isLoading};
};

export const useForecast = (latitude?: number, longitude?: number): {
  data: ForecastWeatherData | null;
  error: Error | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<ForecastWeatherData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    (async (): Promise<void> => {
      try {
        const baseUrl = 'https://weather-api.js-hackers.now.sh/forecast';
        const queryString = (
          typeof latitude === 'number'
          && typeof longitude === 'number'
        )
          ? `?lat=${latitude}&lon=${longitude}`
          : '';
        const response = await fetch(`${baseUrl}${queryString}`);
        if (!response.ok) {
          throw Object.assign(new Error(), {
            message: 'Fetch response not OK',
            name: 'FetchError',
            response,
          });
        }
        setData(await response.json());
      }
      catch (err) {
        setError(err);
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, [latitude, longitude]);

  return {data, error, isLoading};
};
