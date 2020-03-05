import {CurrentWeatherData, ForecastWeatherData} from '../types';
import {getDailyTempRange, isDay} from '../utilities';
import apiCurrent from './api-responses/current.json';
import apiForecast from './api-responses/forecast.json';

const currentWeatherData = apiCurrent as CurrentWeatherData;
const forecastWeatherData = apiForecast as ForecastWeatherData;

describe('getDailyTempRange', () => {
  const x = 19.44;
  const y = 24.44;
  test(`24-hr temp range is ${x} to ${y}`, () => {
    expect(getDailyTempRange(currentWeatherData, forecastWeatherData))
      .toEqual([x, y]);
  });
  // test('', () => {});
});

describe('isDay', () => {
  test('mock data is day', () => {
    expect(isDay(currentWeatherData)).toBe(true);
  });
  // test('', () => {});
});

// describe('getTempMin', () => {
//   test('', () => {});
//   // test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
//   // test('', () => {});
// });
