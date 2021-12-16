import { ICountry } from './interface';
declare function getCountryByCode(isoCode: string): ICountry | undefined;
declare function getAllCountries(): ICountry[];
declare const _default: {
    getCountryByCode: typeof getCountryByCode;
    getAllCountries: typeof getAllCountries;
};
export default _default;
