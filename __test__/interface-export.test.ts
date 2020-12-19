// importing interfaces from main index.ts file
import { ICountry, ICity, IState } from '../index';

// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

function isValidCountryObjectStructure(object: any): object is ICountry {
  return 'name' in object && 'phonecode' in object && 'isoCode' in object && 'flag' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
  const country: ICountry = {
    name: 'India',
    phonecode: '+91',
    isoCode: 'IN',
    flag: '🇮🇳'
  };
  let isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
  const country = {
    phonecode: '+91', // missing name field
    isoCode: 'IN',
    flag: '🇮🇳'
  };
  let isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(false);
});

function isValidCountryObjectAndValueType(object: any): object is ICountry {
  return typeof typeof object.name == "string" && typeof object.phonecode == "string" && typeof object.isoCode == "string" && typeof object.flag == "string";
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country: ICountry = {
    name: 'India',
    phonecode: '+91',
    isoCode: 'IN',
    flag: '🇮🇳'
  };
  let isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country = {
    name: 'India',
    phonecode: 91, // wrong type
    isoCode: 'IN',
    flag: '🇮🇳'
  };
  let isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(false);
});

