// importing interfaces from main index.ts file
import { ICountry } from '../lib/interface';

// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

function isValidCountryObjectStructure(object: any): object is ICountry {
	return 'name' in object && 'phonecode' in object && 'isoCode' in object && 'flag' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
	const country = {
		name: 'India',
		phonecode: '+91',
		isoCode: 'IN',
		flag: '🇮🇳',
		currency: 'INR',
		latitude: '20.00000000',
		longitude: '77.00000000',
		timezones: [
			{
				zoneName: 'Asia/Kolkata',
				gmtOffset: 19800,
				gmtOffsetName: 'UTC+05:30',
				abbreviation: 'IST',
				tzName: 'Indian Standard Time',
			},
		]
	};
	const isCountry = isValidCountryObjectStructure(country);
	expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
	const country = {
		phonecode: '+91', // missing name field
		isoCode: 'IN',
		flag: '🇮🇳',
	};
	const isCountry = isValidCountryObjectStructure(country);
	expect(isCountry).toEqual(false);
});

function isValidCountryObjectAndValueType(object: any): object is ICountry {
	return (
		typeof typeof object.name === 'string' &&
		typeof object.phonecode === 'string' &&
		typeof object.isoCode === 'string' &&
		typeof object.flag === 'string'
	);
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
	const country: ICountry = {
		name: 'India',
		phonecode: '+91',
		isoCode: 'IN',
		flag: '🇮🇳',
		currency: 'INR',
		latitude: '20.00000000',
		longitude: '77.00000000',
		timezones: [
			{
				zoneName: 'Asia/Kolkata',
				gmtOffset: 19800,
				gmtOffsetName: 'UTC+05:30',
				abbreviation: 'IST',
				tzName: 'Indian Standard Time',
			},
		],
	};
	const isCountry = isValidCountryObjectAndValueType(country);
	expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
	const country = {
		name: 'India',
		phonecode: 91, // wrong type
		isoCode: 'IN',
		flag: '🇮🇳',
		currency: 'INR',
		latitude: '20.00000000',
		longitude: '77.00000000',
		timezones: [
			{
				zoneName: 'Asia/Kolkata',
				gmtOffset: 19800,
				gmtOffsetName: 'UTC+05:30',
				abbreviation: 'IST',
				tzName: 'Indian Standard Time',
			},
		],
	};
	const isCountry = isValidCountryObjectAndValueType(country);
	expect(isCountry).toEqual(false);
});
