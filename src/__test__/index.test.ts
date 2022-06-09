/* eslint-disable no-shadow */
import { Country as CountrySource, State as StateSource, City as CitySource } from '../index';
import { ICountry, ICity, IState } from '../interface';

const executeAllTests = function (Country: any, State: any, City: any) {
	test('Check for Country By Code ', async () => {
		const code = 'CA';
		const country: ICountry = await Country.getCountryByCode(code);
		expect(country).toEqual({
			name: 'Canada',
			phonecode: '1',
			isoCode: 'CA',
			flag: '🇨🇦',
			currency: 'CAD',
			latitude: '60.00000000',
			longitude: '-95.00000000',
			timezones: [
				{
					zoneName: 'America/Atikokan',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America)',
				},
				{
					zoneName: 'America/Blanc-Sablon',
					gmtOffset: -14400,
					gmtOffsetName: 'UTC-04:00',
					abbreviation: 'AST',
					tzName: 'Atlantic Standard Time',
				},
				{
					zoneName: 'America/Cambridge_Bay',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Creston',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Dawson',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Dawson_Creek',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Edmonton',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Fort_Nelson',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America)',
				},
				{
					zoneName: 'America/Glace_Bay',
					gmtOffset: -14400,
					gmtOffsetName: 'UTC-04:00',
					abbreviation: 'AST',
					tzName: 'Atlantic Standard Time',
				},
				{
					zoneName: 'America/Goose_Bay',
					gmtOffset: -14400,
					gmtOffsetName: 'UTC-04:00',
					abbreviation: 'AST',
					tzName: 'Atlantic Standard Time',
				},
				{
					zoneName: 'America/Halifax',
					gmtOffset: -14400,
					gmtOffsetName: 'UTC-04:00',
					abbreviation: 'AST',
					tzName: 'Atlantic Standard Time',
				},
				{
					zoneName: 'America/Inuvik',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America',
				},
				{
					zoneName: 'America/Iqaluit',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America',
				},
				{
					zoneName: 'America/Moncton',
					gmtOffset: -14400,
					gmtOffsetName: 'UTC-04:00',
					abbreviation: 'AST',
					tzName: 'Atlantic Standard Time',
				},
				{
					zoneName: 'America/Nipigon',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America',
				},
				{
					zoneName: 'America/Pangnirtung',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America',
				},
				{
					zoneName: 'America/Rainy_River',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/Rankin_Inlet',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/Regina',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/Resolute',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/St_Johns',
					gmtOffset: -12600,
					gmtOffsetName: 'UTC-03:30',
					abbreviation: 'NST',
					tzName: 'Newfoundland Standard Time',
				},
				{
					zoneName: 'America/Swift_Current',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/Thunder_Bay',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America',
				},
				{
					zoneName: 'America/Toronto',
					gmtOffset: -18000,
					gmtOffsetName: 'UTC-05:00',
					abbreviation: 'EST',
					tzName: 'Eastern Standard Time (North America',
				},
				{
					zoneName: 'America/Vancouver',
					gmtOffset: -28800,
					gmtOffsetName: 'UTC-08:00',
					abbreviation: 'PST',
					tzName: 'Pacific Standard Time (North America',
				},
				{
					zoneName: 'America/Whitehorse',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America',
				},
				{
					zoneName: 'America/Winnipeg',
					gmtOffset: -21600,
					gmtOffsetName: 'UTC-06:00',
					abbreviation: 'CST',
					tzName: 'Central Standard Time (North America',
				},
				{
					zoneName: 'America/Yellowknife',
					gmtOffset: -25200,
					gmtOffsetName: 'UTC-07:00',
					abbreviation: 'MST',
					tzName: 'Mountain Standard Time (North America',
				},
			],
		});
	});

	test('Check for Country By undefined Code ', async () => {
		let code;
		const country: ICountry = await Country.getCountryByCode();
		expect(country).toEqual(code);
	});

	test('Check for Canada States', async () => {
		const code = 'CA';
		const country: any = await Country.getCountryByCode(code);
		const states = await State.getStatesOfCountry(country.isoCode);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alberta',
			'British Columbia',
			'Manitoba',
			'New Brunswick',
			'Newfoundland and Labrador',
			'Northwest Territories',
			'Nova Scotia',
			'Nunavut',
			'Ontario',
			'Prince Edward Island',
			'Quebec',
			'Saskatchewan',
			'Yukon',
		]);
	});

	test('Check All States for United States Of America', async () => {
		const code = 'US';
		const country: any = await Country.getCountryByCode(code);
		const states = await State.getStatesOfCountry(country.isoCode);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alabama',
			'Alaska',
			'American Samoa',
			'Arizona',
			'Arkansas',
			'Baker Island',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'District of Columbia',
			'Florida',
			'Georgia',
			'Guam',
			'Hawaii',
			'Howland Island',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Jarvis Island',
			'Johnston Atoll',
			'Kansas',
			'Kentucky',
			'Kingman Reef',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Midway Atoll',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Navassa Island',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Northern Mariana Islands',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Palmyra Atoll',
			'Pennsylvania',
			'Puerto Rico',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'United States Minor Outlying Islands',
			'United States Virgin Islands',
			'Utah',
			'Vermont',
			'Virginia',
			'Wake Island',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		]);
	});

	test('Check States for undefined code', async () => {
		let code;
		const states = await State.getStatesOfCountry(code);
		expect(states.length).toEqual(0);
	});

	test('Check Cities for undefined State', async () => {
		let countryCode;
		const stateCode = 'DL';
		const cities: any = await City.getCitiesOfState(countryCode, stateCode);

		expect(cities.length).toEqual(0);
	});

	test('Check Cities for undefined State', async () => {
		const countryCode = 'IN';
		let stateCode;
		const cities: any = await City.getCitiesOfState(countryCode, stateCode);
		expect(cities.length).toEqual(0);
	});
};
export default executeAllTests;
executeAllTests(CountrySource, StateSource, CitySource);
