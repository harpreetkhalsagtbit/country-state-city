import csc from '../index';
import { ICountry, ICity, IState } from '../index';

const executeAllTests = function(csc: any) {
  test('Check for Country By Code ', () => {
    const code = 'CA';
    let country = csc.getCountryByCode(code);
    expect(country).toEqual({
      name: 'Canada',
      phonecode: '1',
      isoCode: 'CA',
      flag: '🇨🇦'
    })
  })

  test('Check for Canada States', () => {
    const code = 'CA';
    let country = csc.getCountryByCode(code);
    let states = csc.getStatesOfCountry(country.isoCode);
    let names = states.map((state: IState) => state.name);
    expect(names).toEqual([
      'Alberta',
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
      'Yukon'
    ])
  })

  test('Check All States for United States Of America', () => {
    const code = 'US';
    let country = csc.getCountryByCode(code);
    let states = csc.getStatesOfCountry(country.isoCode);
    let names = states.map((state: IState) => state.name);
    expect(names).toEqual([
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'Baker Island',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Howland Island',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Jarvis Island',
      'Johnston Atoll',
      'Kansas',
      'Kentucky',
      'Kingman Reef',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Midway Atoll',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Navassa Island',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palmyra Atoll',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'United States Minor Outlying Islands',
      'United States Virgin Islands',
      'Utah',
      'Vermont',
      'Virginia',
      'Wake Island',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ])
  })

  test('Check States for India', () => {
    const code = 'IN';
    let country = csc.getCountryByCode(code);
    let states = csc.getStatesOfCountry(country.isoCode);
    let names = states.map((state: IState) => state.name);

    expect(names).toEqual([
      'Andaman and Nicobar Islands',
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
      'Kerala',
      'Ladakh',
      'Lakshadweep',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Puducherry',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
    ])
  })

  test('Check Cities for Delhi', () => {
    const countryCode = 'IN';
    const stateCode = 'DL';
    let cities = csc.getCitiesOfState(countryCode, stateCode);
    let names = cities.map((city: ICity) => city.name);
    expect(names).toEqual([
      'Alipur', 
      'Bawana',
      'Central Delhi',
      'Delhi',
      'Deoli',
      'East Delhi',
      'Karol Bagh',
      'Najafgarh',
      'Nangloi Jat',
      'Narela',
      'New Delhi',
      'North Delhi',
      'North East Delhi',
      'North West Delhi',
      'Pitampura',
      'Rohini',
      'South Delhi',
      'South West Delhi',
      'West Delhi',
    ]);
  })
}
export default executeAllTests;
executeAllTests(csc);
