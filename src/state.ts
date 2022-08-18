import fs from 'fs';
import path from 'path';
import { compare } from './utils';
import { IState } from './interface';

// Array of Interface IState
let stateList: Array<IState> = [];

// Get a list of all states.
export const getAllStates = (): IState[] => {
	if (stateList.length === 0) {
		const all: any = fs.readFileSync(path.join(__dirname, 'assets/state.json'), 'utf-8');
		stateList = JSON.parse(all);
	}

	return stateList;
};

// Get a list of states belonging to a specific country.
export function getStatesOfCountry(countryCode: string = ''): IState[] {
	if (!countryCode) return [];
	// get data from file or cache
	const states = getAllStates().filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

// Find a country by it's ISO code and the country in which it is contained.
export const getStateByCodeAndCountry = (stateCode: string, countryCode: string) => {
	// get data from file or cache
	const state: any = getAllStates().filter((stateObj: any) => {
		return stateObj.isoCode === stateCode && stateObj.countryCode === countryCode;
	});

	return state;
};

export default {
	getAllStates,
	getStatesOfCountry,
	getStateByCodeAndCountry,
};
