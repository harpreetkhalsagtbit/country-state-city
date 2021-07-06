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

export const compare = (a: any, b: any) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};
