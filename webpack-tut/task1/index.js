import calcExpression, { sum, mult } from './calculator/index.js';
import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';
import './polyfills/array-flat.js';
import './polyfills/array-flatMap.js';
// import calcResult from './calculator/index.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook').then((data) => console.log(data));
printProfile({ name: 'Tom', company: 'The World' });
