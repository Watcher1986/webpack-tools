import { sum, mult } from '../calculator';

it('should return sum of two numbers', () => {
  const suma = sum(3, 4);

  expect(suma).toEqual(7);
});

it('should return multiplied numbers', () => {
  const multa = mult(3, 4);

  expect(multa).toEqual(12);
});
