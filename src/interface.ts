export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
}

export interface IState {
    name: string;
    isoCode: string;
    countryCode: string;
}
export interface ICity {
   name: string;
   countryCode: string;
   stateCode: string;
}
