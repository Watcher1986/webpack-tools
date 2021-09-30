import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

console.log(profile); // eslint-disable-line

const num = 17;

if (num === 18) {
  // eslint-disable-next-line no-alert
  alert('Hi');
}
