import countryList from './lib/country.json';
import stateList from './lib/state.json';
import cityList from './lib/city.json';
import { ICountry, ICity, IState} from './src/interface';
export { ICountry, ICity, IState} from './src/interface';

 export default {
    getStatesOfCountry: function (countryCode: string): IState[] {
        var states = stateList.filter(function (value) {
            return value.countryCode === countryCode
        })
        return states.sort(compare)
    },
    getCitiesOfState: function (countryCode: string, stateCode: string): ICity[] {
        var cities = cityList.filter(function (value) {
            return (value.countryCode === countryCode && value.stateCode === stateCode)
        })
        return cities.sort(compare)
    },
    getCitiesOfCountry: function (countryCode: string): ICity[] {
        var cities = cityList.filter(function (value) {
            return (value.countryCode === countryCode)
        })
        return cities.sort(compare)
    },
    getAllCountries: function (): ICountry[] {
        return countryList;
    },
    getAllStates: function (): IState[] {
        return stateList;
    },
    getAllCities: function (): ICity[] {
        return cityList;
    },
    getCountryByCode: function (isoCode: string): ICountry {
        return _findEntryByCode(countryList, isoCode);
    },
    getStateByCode: function (isoCode: string): IState {
        return _findEntryByCode(stateList, isoCode);
    }
}

let _findEntryByCode = (source: any, code: string) => {
    if (code && source != null) {
        let codex = source.findIndex((c:any) => c.isoCode === code);
        return (codex !== -1) ? source[codex] : "";
    }
    else return "";
}

function compare(a:any, b:any) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
