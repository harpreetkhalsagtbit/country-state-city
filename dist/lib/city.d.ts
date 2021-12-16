import { ICity } from './interface';
declare function getAllCities(): ICity[];
declare function getCitiesOfState(countryCode: string, stateCode: string): ICity[];
declare function getCitiesOfCountry(countryCode: string): ICity[] | undefined;
declare const _default: {
    getAllCities: typeof getAllCities;
    getCitiesOfState: typeof getCitiesOfState;
    getCitiesOfCountry: typeof getCitiesOfCountry;
};
export default _default;
