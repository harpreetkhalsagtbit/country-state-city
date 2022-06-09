export async function fetchAsset<T>(assetName: 'country' | 'city' | 'state'): Promise<T[]> {
	const response = await fetch(`https://dev.devtest.vegas/static/country-state-city/${assetName}.json`).catch((error) => {
		console.group('[ERROR] country-state-city');
		console.error(error);
		console.groupEnd();
		return null;
	});
	if (!response) {
		return [];
	}

	const list = await response.json();
	return list;
}