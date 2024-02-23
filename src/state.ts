import stateList from './assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from './utils';
import { IState } from './interface';

// Get a list of states belonging to a specific country.
export default function getStatesOfCountry(countryCode: string = ''): IState[] {
	if (!countryCode) return [];
	// get data from file or cache
	const states = stateList.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}