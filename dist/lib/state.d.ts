import { IState } from './interface';
export declare function getAllStates(): IState[];
export declare function getStatesOfCountry(countryCode: string): IState[];
export declare function getStateByCodeAndCountry(stateCode: string, countryCode: string): IState | undefined;
export declare function getStateByCode(isoCode: string): IState | undefined;
declare const _default: {
    getAllStates: typeof getAllStates;
    getStatesOfCountry: typeof getStatesOfCountry;
    getStateByCodeAndCountry: typeof getStateByCodeAndCountry;
    getStateByCode: typeof getStateByCode;
};
export default _default;
