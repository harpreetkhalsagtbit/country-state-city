// import stateList from './assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from './utils';
import { IState } from './interface';
import { fetchAsset } from './utils/fetch-asset';

// Get a list of all states.
export async function getAllStates(): Promise<IState[]> {
	return await fetchAsset<IState>('state');
}

// Get a list of states belonging to a specific country.
export async function getStatesOfCountry(countryCode: string): Promise<IState[]> {
	if (!countryCode) return [];
	
	const stateList = await fetchAsset<IState>('state');

	const states = stateList.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

// Find a country by it's ISO code and the country in which it is contained.
export async function getStateByCodeAndCountry(stateCode: string, countryCode: string): Promise<IState | undefined> {
	if (!stateCode) return undefined;
	if (!countryCode) return undefined;

	const stateList = await fetchAsset<IState>('state');

	return findStateByCodeAndCountryCode(stateList, stateCode, countryCode);
}

// to be deprecate
export async function getStateByCode(isoCode: string): Promise<IState | undefined> {
	// eslint-disable-next-line no-console
	console.warn(
		`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`,
	);
	if (!isoCode) return undefined;

	const stateList = await fetchAsset<IState>('state');

	return findEntryByCode(stateList, isoCode);
}

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
	getStateByCode,
};
