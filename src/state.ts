import stateList from './assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from './utils';
import { IState } from './interface';

// Get a list of all states.
export function getAllStates(): IState[] {
	return stateList;
}

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countryCode: string = ''): IState[] {
	if (!countryCode) return [];
	// get data from file or cache
	const states = stateList.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

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

function sortByIsoCode(countries: IState[]): IState[] {
	return countries.sort((a, b) => {
		return compare<IState>(a, b, (entity) => {
			return `${entity.countryCode}-${entity.isoCode}`;
		});
	});
}

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
	getStateByCode,
	sortByIsoCode,
};
