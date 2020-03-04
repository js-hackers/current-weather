import {CurrentWeatherData, ForecastItem, ForecastWeatherData} from '../types';

export const isDay = (weatherData: CurrentWeatherData): boolean => (
  weatherData.dt >= weatherData.sunrise
  && weatherData.dt < weatherData.sunset
);

export const padTimeUnit = (n: number): string => {
  const two = 2;
  return typeof n === 'number'
    ? String(n).padStart(two, '0')
    : '00';
};

const getHMS = (date: Date): [number, number, number] => {
  const h = date.getUTCHours();
  const m = date.getUTCMinutes();
  const s = date.getUTCSeconds();
  return [h, m, s];
};

const get12Hour = (h: number): [number, boolean] => {
  const twelve = 12;
  const getHour = (h: number): number => {
    if (h > twelve) return h % twelve;
    if (h === 0) return twelve;
    return h;
  };
  const h12 = getHour(h);
  return [h12, h >= twelve];
};

type TimeData = {
  formatted: string;
  h12: {
    formatted: string;
    hms: [number, number, number];
    pm: boolean;
  };
  hms: [number, number, number];
};

export const getTime = (
  unixSeconds: number,
  offsetSeconds: number,
): TimeData => {
  const msPerS = 1000;
  const adjustedSeconds = unixSeconds + offsetSeconds;
  const date = new Date(adjustedSeconds * msPerS);
  const [h, m, s] = getHMS(date);
  const [h12, pm] = get12Hour(h);
  return {
    formatted: `${padTimeUnit(h)}:${padTimeUnit(m)}`,
    h12: {
      formatted: `${h12}:${padTimeUnit(m)}`,
      hms: [h12, m, s],
      pm,
    },
    hms: [h, m, s],
  };
};

type KeysOfType<T, U> = {[K in keyof T]: T[K] extends U ? K : never}[keyof T];

type CommonNumericProps =
  KeysOfType<CurrentWeatherData | ForecastItem, number>;

export const getCommonNumericValues = (
  commonPropName: CommonNumericProps,
  currentWeatherData: CurrentWeatherData,
  forecastWeatherData: ForecastWeatherData,
): number[] => {
  const forecastValues = forecastWeatherData.list
    .map(data => data[commonPropName]);
  return [currentWeatherData[commonPropName], ...forecastValues];
};

export const getDailyTempRange = (
  currentWeatherData: CurrentWeatherData,
  forecastWeatherData: ForecastWeatherData,
): [number, number] => {
  const hrsPerDay = 24;
  const hrsPerSample = 3;
  const samplesPerday = hrsPerDay / hrsPerSample;
  const min = Math.min(...getCommonNumericValues(
    'temp_min',
    currentWeatherData,
    forecastWeatherData,
  ).slice(0, samplesPerday + 1));
  const max = Math.max(...getCommonNumericValues(
    'temp_max',
    currentWeatherData,
    forecastWeatherData,
  ).slice(0, samplesPerday + 1));
  return [min, max];
};
