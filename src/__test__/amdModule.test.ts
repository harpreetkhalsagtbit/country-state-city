import executeAllCountryTests from './country.test';
import executeAllStateTests from './state.test';
import executeAllCityTests from './city.test';

const { Country, State, City } = require('../index');

executeAllCountryTests(Country);
executeAllStateTests(State);
executeAllCityTests(City);
