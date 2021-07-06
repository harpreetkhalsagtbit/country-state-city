import stateList from '../assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from '../utils';
import { IState } from './interface';

// Get a list of all states.
export function getAllStates(): IState[] {
	return stateList;
}

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countryCode: string): IState[] {
	if (!countryCode) return [];
	const states = stateList.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

// Find a country by it's ISO code and the country in which it is contained.
export function getStateByCodeAndCountry(stateCode: string, countryCode: string): IState | undefined {
	if (!stateCode) return undefined;
	if (!countryCode) return undefined;

	return findStateByCodeAndCountryCode(stateList, stateCode, countryCode);
}

// to be deprecate
export function getStateByCode(isoCode: string): IState | undefined {
	// eslint-disable-next-line no-console
	console.warn(
		`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`,
	);
	if (!isoCode) return undefined;

	return findEntryByCode(stateList, isoCode);
}

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
	getStateByCode,
};
