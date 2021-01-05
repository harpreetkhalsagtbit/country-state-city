interface Timezones {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
}

export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
    currency: string;
    latitude: string;
    longitude: string;
    timezones?: Timezones[];
}

export interface IState {
    name: string;
    isoCode: string;
    countryCode: string;
    latitude?: string | null;
    longitude?: string | null;
}
export interface ICity {
    name: string;
    countryCode: string;
    stateCode: string;
    latitude?: string | null;
    longitude?: string | null;
}
