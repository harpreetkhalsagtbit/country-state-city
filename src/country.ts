import countryList from '../lib/country.json';
import { Timezones } from './interface';

export default class Country {
	constructor(
		public name: string,
		public phonecode: string,
		public isoCode: string,
		public flag: string,
		public currency: string,
		public latitude?: string | null,
		public longitude?: string | null,
		public timezones?: Timezones[],
	) {}

	static byIsoCode(isoCode: string): Country | null {
		if (isoCode && countryList != null) {
			const codex = countryList.findIndex((c: any) => {
				return c.isoCode === isoCode;
			});

			return codex !== -1 ? countryList[codex] : null;
		}

		return null;
	}

	static all(): Country[] {
		return countryList;
	}
}
