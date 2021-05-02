import countryList from './lib/country.json';
import stateList from './lib/state.json';
import cityList from './lib/city.json';
import { ICountry, ICity, IState } from './src/interface';

export { ICountry, ICity, IState } from './src/interface';

const _findEntryByCode = (source: any, code: string) => {
	if (code && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.isoCode === code;
		});
		return codex !== -1 ? source[codex] : '';
	}
	return '';
};

const _findStateByCodeAndCountryCode = (source: any, code: string, countryCode: string) => {
	if (code && countryCode && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.isoCode === code && c.countryCode === countryCode;
		});
		return codex !== -1 ? source[codex] : '';
	}
	return '';
};

const compare = (a: any, b: any) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};

export default {
	getStatesOfCountry(countryCode: string): IState[] {
		const states = stateList.filter((value) => {
			return value.countryCode === countryCode;
		});
		return states.sort(compare);
	},
	getCitiesOfState(countryCode: string, stateCode: string): ICity[] {
		const cities = cityList.filter((value: { countryCode: string; stateCode: string }) => {
			return value.countryCode === countryCode && value.stateCode === stateCode;
		});
		return cities.sort(compare);
	},
	getCitiesOfCountry(countryCode: string): ICity[] {
		const cities = cityList.filter((value: { countryCode: string }) => {
			return value.countryCode === countryCode;
		});
		return cities.sort(compare);
	},
	getAllCountries(): ICountry[] {
		return countryList;
	},
	getAllStates(): IState[] {
		return stateList;
	},
	getAllCities(): ICity[] {
		return cityList;
	},
	getCountryByCode(isoCode: string): ICountry {
		return _findEntryByCode(countryList, isoCode);
	},
	// to be deprecate
	getStateByCode(isoCode: string): IState {
		// eslint-disable-next-line no-console
		console.warn(
			`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`,
		);
		return _findEntryByCode(stateList, isoCode);
	},
	getStateByCodeAndCountry(isoCode: string, countryCode: string): IState {
		return _findStateByCodeAndCountryCode(stateList, isoCode, countryCode);
	},
};
