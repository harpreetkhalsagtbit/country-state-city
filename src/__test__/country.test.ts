/* eslint-disable no-shadow */
import { Country } from '../index';
import { ICountry } from '../interface';

const executeAllTests = (Country: any) => {
	describe('Check for Country Module', () => {
		it('Check for Country By Code', () => {
			const code = 'CA';
			const country: ICountry = Country.getCountryByCode(code);
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

		test('Check for Country By undefined Code ', () => {
			let code;
			const country: ICountry = Country.getCountryByCode(code);
			expect(country).toEqual(code);
		});

		test('Check for get all african countries', () => {
			const africans = Country.getAllAfricanCountries();
			expect(africans[0].name).toEqual('Algeria');
		});

		test('Check for get all african countries', () => {
			const africans = Country.getAllAfricanCountries();
			const firstCountry = {
				isoCode: 'DZ',
				name: 'Algeria',
				phonecode: '213',
				flag: '🇩🇿',
				currency: 'DZD',
				latitude: '28.00000000',
				longitude: '3.00000000',
				timezones: [
					{
						zoneName: 'Africa/Algiers',
						gmtOffset: 3600,
						gmtOffsetName: 'UTC+01:00',
						abbreviation: 'CET',
						tzName: 'Central European Time',
					},
				],
			};
			expect(africans[0]).toEqual(firstCountry);
		});
	});
};

export default executeAllTests;
executeAllTests(Country);
