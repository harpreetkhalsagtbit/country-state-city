import State from '../src/state';

const executeAllTests = () => {
	describe('constructor', () => {
		test('constructs a state', () => {
			const state = new State('Foo', 'XX', 'XX', null, null);

			expect(state).not.toBeNull();
		});
	});

	describe('withinCountry', () => {
		test('it finds states within Canada', () => {
			const lookupResult = State.withinCountry('CA');
			const names = lookupResult.map((state) => state.name);

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

		test('it finds states within the USA', () => {
			const lookupResult = State.withinCountry('US');
			const names = lookupResult.map((state) => state.name);

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

		test('it finds states within India', () => {
			const lookupResult = State.withinCountry('IN');
			const names = lookupResult.map((state) => state.name);

			expect(names).toEqual([
				'Andaman and Nicobar Islands',
				'Andhra Pradesh',
				'Arunachal Pradesh',
				'Assam',
				'Bihar',
				'Chandigarh',
				'Chhattisgarh',
				'Dadra and Nagar Haveli',
				'Daman and Diu',
				'Delhi',
				'Goa',
				'Gujarat',
				'Haryana',
				'Himachal Pradesh',
				'Jammu and Kashmir',
				'Jharkhand',
				'Karnataka',
				'Kerala',
				'Ladakh',
				'Lakshadweep',
				'Madhya Pradesh',
				'Maharashtra',
				'Manipur',
				'Meghalaya',
				'Mizoram',
				'Nagaland',
				'Odisha',
				'Puducherry',
				'Punjab',
				'Rajasthan',
				'Sikkim',
				'Tamil Nadu',
				'Telangana',
				'Tripura',
				'Uttar Pradesh',
				'Uttarakhand',
				'West Bengal',
			]);
		});
	});

	describe('byIsoCodeAndCountry', () => {
		test('finds California', () => {
			const lookupResult = State.byIsoCodeAndCountry('CA', 'US');

			expect(lookupResult).not.toBeNull();
			expect(lookupResult!.name).toEqual('California');
		});

		test('finds Punjab', () => {
			const lookupResult = State.byIsoCodeAndCountry('PB', 'IN');

			expect(lookupResult).not.toBeNull();
			expect(lookupResult!.name).toEqual('Punjab');
		});

		test('it returns null when not found', () => {
			expect(State.byIsoCodeAndCountry('XX', 'XX')).toBeNull();
		});
	});

	describe('all', () => {
		test('it gets all states', () => {
			const result = State.all();

			expect(result).not.toBeNull();
			expect(result[0]).not.toEqual([]);
		});
	});
};

export default executeAllTests;
executeAllTests();
