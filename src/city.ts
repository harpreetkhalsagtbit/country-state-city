import cityList from '../lib/city.json';

export default class City {
	constructor(
		public name: string,
		public countryCode: string,
		public stateCode: string,
		public latitude?: string | null,
		public longitude?: string | null,
	) {}

	// Get a list of cities belonging to a specific state and country.
	static withinStateAndCountry(stateIsoCode: string, countryIsoCode: string): City[] {
		const cities = cityList.filter((value: { countryCode: string; stateCode: string }) => {
			return value.countryCode === countryIsoCode && value.stateCode === stateIsoCode;
		});

		return cities.sort((a: City, b: City) => (a.name > b.name ? 1 : -1));
	}

	// Get a list of cities belonging to a specific country.
	static withinCountry(countryIsoCode: string): City[] {
		const cities = cityList.filter((value: { countryCode: string }) => {
			return value.countryCode === countryIsoCode;
		});

		return cities.sort((a: City, b: City) => (a.name > b.name ? 1 : -1));
	}

	// Get a list of all cities.
	static all(): City[] {
		return cityList as City[];
	}
}
