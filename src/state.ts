import Country from './country';
import stateList from '../lib/state.json';

export default class State {
	constructor(
		public name: string,
		public isoCode: string,
		public countryCode: string,
		public latitude?: string | null,
		public longitude?: string | null,
	) {}

	// Get a list of states belonging to a specific country.
	static withinCountry(countryIsoCode: string): State[] {
		const states = stateList.filter((value) => value.countryCode === countryIsoCode);
		return states.sort((a: State, b: State) => (a.name > b.name ? 1 : -1));
	}

	// Find a country by it's ISO code and the country in which it is contained.
	static byIsoCodeAndCountry(isoCode: string, country: Country): State | null {
		if (isoCode && country.isoCode && stateList != null) {
			const codex = stateList.findIndex((c: any) => {
				return c.isoCode === isoCode && c.countryCode === country.isoCode;
			});
			return codex !== -1 ? stateList[codex] : null;
		}

		return null;
	}

	// Get a list of all states.
	static all(): State[] {
		return stateList;
	}
}
