const csc = require('../index.js');

test('Check for Country By Id ', () => {
  const code = '38';
  let country = csc.getCountryById(code)
  expect(country).toEqual({"id": "38", "name": "Canada", "phonecode": "1", "sortname": "CA"});
});

test('Check for State By Id ', () => {
  const code = '32';
  let state = csc.getStateById(code)
  expect(state).toEqual({"country_id": "101", "id": "32", "name": "Punjab"});
});

test('Check for City By Id ', () => {
  const code = '31439';
  let city = csc.getCityById(code)
  expect(city).toEqual({"id": "31439", "name": "Lahore", "state_id": "2728"});
});

test('Check for Canada States', () => {
  const code = '38';
  let country = csc.getCountryById(code)
  let states = csc.getStatesOfCountry(country.id)
  let names = states.map((state) => state.name)
  expect(names).toEqual(['Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon']
  );
});

test('Check All States for United States Of America', () => {
  const code = '231';
  let country = csc.getCountryById(code)
  let states = csc.getStatesOfCountry(country.id)
  let names = states.map((state) => state.name)
  expect(names).toEqual(['Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'Byram',
    'California',
    'Cokato',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Lowa',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Medfield',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Jersy',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Ontario',
    'Oregon',
    'Pennsylvania',
    'Ramey',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Sublimity',
    'Tennessee',
    'Texas',
    'Trimble',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming']
  );
});


test('Check States for India', () => {
  const code = '101';
  let country = csc.getCountryById(code)
  let states = csc.getStatesOfCountry(country.id)
  let names = states.map((state) => state.name)

  expect(names).toEqual(['Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kenmore',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Narora',
    'Natwar',
    'Odisha',
    'Paschim Medinipur',
    'Pondicherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'Vaishali',
    'West Bengal']
  );
});

test('Check Cities for Delhi', () => {
  const code = '101';
  let cities = csc.getCitiesOfState('10')
  let names = cities.map((city) => city.name)
  expect(names).toEqual(["Delhi", "New Delhi"]

  );
});
