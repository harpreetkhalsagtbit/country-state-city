import executeAllTests from './index.test';
const { Country, State, City } = require('../dist/index').default;

executeAllTests(Country, State, City);
