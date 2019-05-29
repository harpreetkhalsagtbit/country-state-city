// importing interfaces from main index.ts file
import { ICountry, ICity, IState } from '../index';

// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

function isValidCountryObjectStructure(object: any): object is ICountry {
  return 'id' in object && 'name' in object && 'phonecode' in object && 'sortname' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
  const country: ICountry = {
    id: '1',
    name: 'country',
    phonecode: 'phone_number',
    sortname: 'co'
  };
  let isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
  const country = {
    id: '1',
    phonecode: 1234, // missing name field
    sortname: 'co'
  };
  let isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(false);
});

function isValidCountryObjectAndValueType(object: any): object is ICountry {
  return typeof object.id == "string" && typeof object.name == "string" && typeof object.phonecode == "string" && typeof object.sortname == "string";
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country: ICountry = {
    id: '1',
    name: 'country',
    phonecode: '1234',
    sortname: 'co'
  };
  let isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country = {
    id: '1',
    name: 'country',
    phonecode: 1234, //wrong type
    sortname: 'co'
  };
  let isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(false);
});

