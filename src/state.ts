import stateList from './assets/state.json';
import { findEntryByCode, findStateByCodeAndCountryCode, compare } from './utils';
import { IState,StateFields } from './interface';

// Get a list of all states.
export function getAllStates(): IState[] {
	return stateList;
}

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countryCode: string = '', fields?:StateFields[]): IState[] | Partial<IState>[] {
	if (!countryCode) return [];
	const states = stateList.filter((value) => value.countryCode === countryCode);

  if (fields && fields.length > 0) {
    return states.filter(state => {
      return fields.every(field  => state.hasOwnProperty(field));
    }).map(country => 
       Object.fromEntries(
        Object.entries(country)
        .filter(([key]) => fields.includes(key as keyof IState)) 
      )
    );
  }

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

