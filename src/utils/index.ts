import { ICountry, IState, ICity } from '../interface';

export const findEntryByCode = (source: any, code: string) => {
	if (code && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.isoCode === code;
		});
		return codex !== -1 ? source[codex] : undefined;
	}
	return undefined;
};

export const findStateByCodeAndCountryCode = (source: any, code: string, countryCode: string) => {
	if (code && countryCode && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.isoCode === code && c.countryCode === countryCode;
		});
		return codex !== -1 ? source[codex] : undefined;
	}
	return undefined;
};

export function defaultKeyToCompare<T extends ICountry | IState | ICity>(entity: T) {
	return entity.name;
}

export const compare = <T extends ICountry | IState | ICity>(
	a: T,
	b: T,
	// eslint-disable-next-line no-unused-vars
	keyToCompare: (entity: T) => string = defaultKeyToCompare,
) => {
	if (keyToCompare(a) < keyToCompare(b)) return -1;
	if (keyToCompare(a) > keyToCompare(b)) return 1;
	return 0;
};
